import { Meta, StoryObj } from '@storybook/react';

import { testData } from '../../testing/test-data';

import { DataTable, DataTableProps } from './data-table';

const meta: Meta = {
  title: 'Components/DataTable',
  component: DataTable,
};

export default meta;

const data = testData.jobs.slice(0, 6);

const columns: DataTableProps<(typeof data)[0]>['columns'] = [
  {
    title: 'Position',
    field: 'position',
  },
  {
    title: 'Department',
    field: 'department',
  },
  {
    title: 'Location',
    field: 'location',
  },
];

export const Default: StoryObj<
  DataTableProps<(typeof data)[0]>
> = {
  args: {
    columns,
    data,
  },
};

export const Empty: typeof Default = {
  args: {
    ...Default.args,
    data: [],
  },
};

export const Loading: typeof Default = {
  args: {
    ...Empty.args,
    isLoading: true,
  },
};
