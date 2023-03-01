import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';

import { Alert, AlertProps } from './alert';

const meta: Meta = {
  title: 'Components/Alert',
  component: Alert,
};

export default meta;

export const Default: StoryObj<AlertProps> = {
  args: {
    triggerButton: <Button>Open Alert</Button>,
    title: 'Alert Title',
    message: 'Alert Message',
    actionLabel: 'Confirm',
    action: ({ onClose }) => {
      if (confirm('Fechar alerta?')) {
        onClose();
      }
    },
  },
};
