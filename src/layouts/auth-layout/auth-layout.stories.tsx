import { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from '@/features/auth';

import { AuthLayout, AuthLayoutProps } from './auth-layout';

const meta: Meta = {
  title: 'Layouts/DashboardLayout',
  component: AuthLayout,
};

export default meta;

export const Default: StoryObj<AuthLayoutProps> = {
  args: {
    children: (
      <LoginForm onSuccess={() => console.log('Success')} />
    ),
  },
};
