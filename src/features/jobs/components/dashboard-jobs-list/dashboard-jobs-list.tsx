import { EditIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

import {
  DataTable,
  DataTableProps,
} from '@/components/data-table';
import { Link } from '@/components/link';

import { Job } from '../../types';
import { DeleteJobAlert } from '../delete-job-alert';

export type DashboardJobsListProps = {
  jobs: Job[];
  isLoading?: boolean;
};

const getTableColumns = () => {
  const tableColumns: DataTableProps<Job>['columns'] = [
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
    {
      title: '',
      field: 'id',
      render: ({ entry: { id } }: { entry: { id: string } }) => {
        return <Link href={`/dashboard/jobs/${id}`}>View</Link>;
      },
    },
    {
      title: '',
      field: 'id',
      render: ({ entry: { id } }: { entry: { id: string } }) => {
        return (
          <Link
            href={`/dashboard/jobs/edit/${id}`}
            icon={<EditIcon />}
            variant="solid"
          >
            Edit
          </Link>
        );
      },
    },
    {
      title: '',
      field: 'id',
      render: ({ entry: { id } }: { entry: { id: string } }) => (
        <DeleteJobAlert jobId={id} />
      ),
    },
  ];

  return tableColumns;
};

export const DashboardJobsList = ({
  jobs,
  isLoading,
}: DashboardJobsListProps) => {
  const tableColumns = getTableColumns();

  return (
    <Box data-testid="jobs-list">
      <DataTable
        isLoading={isLoading || false}
        data={jobs}
        columns={tableColumns}
      />
    </Box>
  );
};
