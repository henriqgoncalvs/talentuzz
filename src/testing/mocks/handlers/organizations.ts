import { rest } from 'msw';

import { API_URL } from '@/config/constants';

import { db } from '../db';

const getOrganizationsHandler = rest.get(
  `${API_URL}/organizations`,
  (req, res, ctx) => {
    const organizations = db.organization.getAll();

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(organizations)
    );
  }
);

const getOrganizationHandler = rest.get(
  `${API_URL}/organizations/:organizationId`,
  (req, res, ctx) => {
    const organizationId = req.params.organizationId as string;
    const organization = db.organization.findFirst({
      where: {
        id: { equals: organizationId },
      },
    });

    if (!organization) {
      return res(
        ctx.status(404),
        ctx.json({ message: 'Not found!' })
      );
    }

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(organization)
    );
  }
);

const updateOrganizationHandler = rest.patch(
  `${API_URL}/organizations/:organizationId`,
  async (req, res, ctx) => {
    const organizationId = req.params.organizationId as string;
    const organizationData = await req.json();

    const organization = db.organization.update({
      where: {
        id: { equals: organizationId },
      },
      data: organizationData,
    });

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(organization)
    );
  }
);

export const organizationsHandlers = [
  getOrganizationsHandler,
  getOrganizationHandler,
  updateOrganizationHandler,
];
