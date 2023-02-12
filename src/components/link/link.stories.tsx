import { LinkIcon } from '@chakra-ui/icons';
import { Meta, StoryObj } from '@storybook/react';

import { Link, LinkP } from './link';

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
};

export default meta;

export const Default: StoryObj<LinkP> = {
  args: {
    href: '/',
    children: 'Home',
  },
};

export const WithIcon: typeof Default = {
  args: {
    ...Default.args,
    icon: <LinkIcon />,
  },
};

export const Solid: typeof Default = {
  args: {
    ...Default.args,
    variant: 'solid',
  },
};
