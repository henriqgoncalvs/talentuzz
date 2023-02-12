import { Meta, StoryObj } from '@storybook/react';
import { userEvent, screen } from '@storybook/testing-library';

import { Button } from '@/components/button';

import { InputField, InputFieldP } from './input-field';

const meta: Meta = {
  title: 'Components/InputField',
  component: InputField,
};

export default meta;

export const Default: StoryObj<InputFieldP> = {
  args: {
    label: 'Name',
  },
};

export const WithError: typeof Default = {
  args: {
    ...Default.args,
    error: {
      type: 'required',
      message: 'Name is required',
    },
  },
};

export const TextArea: typeof Default = {
  args: {
    label: 'Name',
    type: 'textarea',
  },
};

export const Form: typeof Default = {
  render: () => (
    <form>
      <InputField label="Name" name="name" />
      <InputField label="Password" name="password" />
    </form>
  ),
  play: async () => {
    userEvent.type(
      await screen.findByLabelText('Name'),
      'shilman@example.com'
    );
    userEvent.type(
      await screen.findByLabelText('Password'),
      'blahblahblah'
    );
  },
};

export const FormWithError: typeof Default = {
  render: () => (
    <form>
      <InputField label="Name" name="name" required />
      <InputField label="Password" name="password" required />
      <Button type="submit">Submit</Button>
    </form>
  ),
  play: () => {
    userEvent.click(screen.getByRole('button'));
  },
};
