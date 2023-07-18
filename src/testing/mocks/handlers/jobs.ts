// ### ROUTES ###
//
// GET /jobs
// GET /jobs/:jobId
// POST /jobs

import { rest } from 'msw';

import { API_URL } from '@/config/constants';
import { JobFilters } from '@/features/jobs';

import { db } from '../db';
import { requireAuth } from '../utils';

const getJobsHandler = rest.get(
  `${API_URL}/jobs`,
  async (req, res, ctx) => {
    const organizationId = req.url.searchParams.get(
      'organizationId'
    ) as string;
    const includes =
      (req.url.searchParams.get('includes') as string) &&
      (JSON.parse(
        req.url.searchParams.get('includes') as string
      ) as string[]);
    const filters =
      (req.url.searchParams.get('filters') as string) &&
      (JSON.parse(
        req.url.searchParams.get('filters') as string
      ) as JobFilters);
    const take = req.url.searchParams.get('take') as string;

    let jobs = [];

    jobs = db.job.findMany({
      ...(take && { take: Number(take) }),
      where: {
        ...(organizationId && {
          organizationId: {
            equals: organizationId,
          },
        }),
        ...(filters && {
          ...(filters.position && {
            position: {
              contains: filters.position[0],
            },
          }),
          ...(filters.location && {
            location: {
              contains: filters.location[0],
            },
          }),
          ...(filters.employmentType && {
            employmentType: {
              in: filters.employmentType,
            },
          }),
          ...(filters.salaryRange && {
            salaryRange: {
              in: filters.salaryRange,
            },
          }),
          ...(filters.experienceLevel && {
            experienceLevel: {
              in: filters.experienceLevel,
            },
          }),
        }),
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (includes) {
      jobs = jobs.map((job) => {
        if (includes.includes('organization')) {
          const organization = db.organization.findFirst({
            where: {
              id: {
                equals: job.organizationId,
              },
            },
          });

          return { ...job, organization };
        }

        return job;
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
      organizationId: user?.organization.id,
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
