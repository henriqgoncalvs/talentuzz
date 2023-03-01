import { Entity } from '@/types';

export type Organization = Entity & {
  adminId: string;
  name: string;
  email: string;
  phone: string;
  info: string;
};

export type CreateOrganizationData = {
  adminId: string;
  name: string;
  email: string;
  phone: string;
  info: string;
};

export type UpdateOrganizationData =
  Partial<CreateOrganizationData>;
