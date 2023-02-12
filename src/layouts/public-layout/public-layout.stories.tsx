import { Meta, StoryObj } from '@storybook/react';

import { PublicLayout, PublicLayoutP } from './public-layout';

const meta: Meta = {
  title: 'Layouts/PublicLayout',
  component: PublicLayout,
};

export default meta;

export const Default: StoryObj<PublicLayoutP> = {
  args: {
    children: (
      <>
        <h1>Heading</h1>
        <p>Paragraph</p>
      </>
    ),
  },
};
