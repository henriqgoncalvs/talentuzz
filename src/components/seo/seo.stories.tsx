import { Meta, StoryObj } from '@storybook/react';

import { Seo, SeoP } from './seo';

const meta: Meta = {
  title: 'Components/Seo',
  component: Seo,
};

export default meta;

export const Default: StoryObj<SeoP> = {
  args: {
    title: 'Seo Page',
  },
};
