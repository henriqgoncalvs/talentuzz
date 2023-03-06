// ### ROUTES ###
//
// GET /jobs
// GET /jobs/:jobId
// POST /jobs

import { rest } from 'msw';

import { API_URL } from '@/config/constants';

import { db } from '../db';
import { requireAuth } from '../utils';

const getJobsHandler = rest.get(
  `${API_URL}/jobs`,
  async (req, res, ctx) => {
    const organizationId = req.url.searchParams.get(
      'organizationId'
    ) as string;

    let jobs = [];

    if (!organizationId) {
      const take = req.url.searchParams.get('take') as string;

      jobs = db.job.findMany({
        take: Number(take),
        orderBy: {
          createdAt: 'desc',
        },
      });
    } else {
      jobs = db.job.findMany({
        where: {
          organizationId: {
            equals: organizationId,
          },
        },
      });
    }

    return res(ctx.delay(300), ctx.status(200), ctx.json(jobs));
  }
);

const getJobHandler = rest.get(
  `${API_URL}/jobs/:jobId`,
  async (req, res, ctx) => {
    const jobId = req.params.jobId as string;
    const job = db.job.findFirst({
      where: {
        id: {
          equals: jobId,
        },
      },
    });

    if (!job) {
      return res(
        ctx.delay(300),
        ctx.status(404),
        ctx.json({ message: 'Not found!' })
      );
    }

    return res(ctx.delay(300), ctx.status(200), ctx.json(job));
  }
);

const createJobHandler = rest.post(
  `${API_URL}/jobs`,
  async (req, res, ctx) => {
    const user = requireAuth({ req });
    const jobData = await req.json();

    const job = db.job.create({
      ...jobData,
      organizationId: user?.organizationId,
    });

    return res(ctx.delay(300), ctx.status(201), ctx.json(job));
  }
);

const updateJobHandler = rest.patch(
  `${API_URL}/jobs/:jobId`,
  async (req, res, ctx) => {
    requireAuth({ req });

    const jobId = req.params.jobId as string;
    const jobData = await req.json();

    const job = db.job.update({
      where: {
        id: {
          equals: jobId,
        },
      },
      data: jobData,
    });

    return res(ctx.delay(300), ctx.status(200), ctx.json(job));
  }
);

const deleteJobHandler = rest.delete(
  `${API_URL}/jobs/:jobId`,
  async (req, res, ctx) => {
    requireAuth({ req });

    const jobId = req.params.jobId as string;

    db.job.delete({
      where: {
        id: {
          equals: jobId,
        },
      },
    });

    return res(ctx.delay(300), ctx.status(204));
  }
);

export const jobsHandlers = [
  getJobsHandler,
  getJobHandler,
  createJobHandler,
  updateJobHandler,
  deleteJobHandler,
];
