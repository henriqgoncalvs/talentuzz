import { factory, nullable, primaryKey } from '@mswjs/data';

import { uid } from '@/utils/uid';

const models = {
  user: {
    id: primaryKey(uid),
    createdAt: Date.now,
    email: String,
    password: String,
    organizationId: String,
  },
  organization: {
    id: primaryKey(uid),
    createdAt: Date.now,
    adminId: String,
    name: String,
    email: String,
    phone: String,
    info: String,
    profileImage: nullable(String),
    location: String,
  },
  job: {
    id: primaryKey(uid),
    createdAt: Date.now,
    organizationId: String,
    position: String,
    info: nullable(String),
    location: String,
    department: String,
    salaryRange: String,
    employmentType: String,
    experienceLevel: String,
  },
};

export const db = factory(models);
