import { Meta, StoryObj } from '@storybook/react';

import {
  DashboardLayout,
  DashboardLayoutP,
} from './dashboard-layout';

const meta: Meta = {
  title: 'Layouts/DashboardLayout',
  component: DashboardLayout,
};

export default meta;

export const Default: StoryObj<DashboardLayoutP> = {
  args: {
    children: (
      <>
        <h1>Heading</h1>
        <p>Paragraph</p>
      </>
    ),
  },
};
