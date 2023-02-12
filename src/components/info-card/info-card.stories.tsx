import { Meta, StoryObj } from '@storybook/react';

import { InfoCard, InfoCardP } from './info-card';

const meta: Meta = {
  title: 'Components/InfoCard',
  component: InfoCard,
};

export default meta;

export const Default: StoryObj<InfoCardP> = {
  args: {
    label: 'Full Name',
    value: 'John Doe',
  },
};
