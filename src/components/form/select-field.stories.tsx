import { Meta, StoryObj } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';

import { Button } from '@/components/button';

import { SelectField, SelectFieldP } from './select-field';

const meta: Meta = {
  title: 'Components/SelectField',
  component: SelectField,
};

export default meta;

export const Default: StoryObj<SelectFieldP> = {
  args: {
    label: 'Options',
    placeholder: 'Select a value',
    options: [
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' },
    ],
  },
};

export const WithError: typeof Default = {
  args: {
    ...Default.args,
    error: {
      type: 'required',
      message: 'A value is required',
    },
  },
};

export const Form: typeof Default = {
  render: () => (
    <form>
      <SelectField
        label="Name"
        name="name"
        options={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' },
          { label: 'Option 3', value: 'option-3' },
        ]}
      />
    </form>
  ),
  play: async () => {
    const select = await screen.findByLabelText('Name');

    userEvent.click(select);
    userEvent.click(await screen.findByText('Option 1'));
  },
};

export const FormWithError: typeof Default = {
  render: () => (
    <form>
      <SelectField
        label="Name"
        name="name"
        options={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' },
          { label: 'Option 3', value: 'option-3' },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  ),
  play: () => {
    userEvent.click(screen.getByRole('button'));
  },
};
