import { Entity } from '@/types';

export type AuthUser = Entity & {
  email: string;
  organization: {
    id: string;
  };
};

export type LoginData = {
  email: string;
  password: string;
};

export type SignUpData = {
  email: string;
  password: string;
  org_name: string;
  org_email: string;
  org_info: string;
  org_phone: string;
  org_location: string;
};
