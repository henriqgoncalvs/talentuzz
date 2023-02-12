import { PlusSquareIcon } from '@chakra-ui/icons';
import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonP } from './button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

export const Default: StoryObj<ButtonP> = {
  args: { children: 'Hello' },
};

export const WithIcon: typeof Default = {
  args: {
    ...Default.args,
    icon: <PlusSquareIcon />,
  },
};
