import { waitFor } from '@testing-library/react';

import DashboardJobsPage from '@/pages/dashboard/jobs';
import { getUser } from '@/testing/mocks/utils';
import { testData } from '@/testing/test-data';
import {
  appRender,
  appRenderWithUserEvent,
  checkTableValues,
  screen,
  waitForLoadingToFinish,
  within,
} from '@/testing/test-utils';

const jobsFromUserOrganization = testData.jobs.filter(
  (job) => job.organizationId === getUser().organizationId
);

jest.mock('@/features/auth', () => ({
  useUser: () => ({ data: getUser() }),
}));

describe('#PAGE - Dashboard Jobs Page', () => {
  it('should render the jobs list', async () => {
    appRender(<DashboardJobsPage />);

    await waitForLoadingToFinish();

    expect(screen.getByText(/jobs/i)).toBeInTheDocument();

    checkTableValues({
      container: screen.getByTestId('jobs-list'),
      data: jobsFromUserOrganization,
      columns: ['position', 'department', 'location'],
    });
  });

  it('should delete job', async () => {
    const { user } = appRenderWithUserEvent(
      <DashboardJobsPage />
    );

    await waitForLoadingToFinish();

    const job = jobsFromUserOrganization[0];
    const jobTableRow = screen.getByRole('row', {
      name: new RegExp(
        `${job.position} ${job.department} ${job.location} View`,
        'i'
      ),
    });

    const deleteJobButton = within(jobTableRow).getByRole(
      'button',
      {
        name: /delete/i,
      }
    );

    await user.click(deleteJobButton);

    const deleteJobAlert = screen.getByRole('alertdialog');

    expect(deleteJobAlert).toBeInTheDocument();

    const confirmDeleteButton = within(deleteJobAlert).getByRole(
      'button',
      {
        name: /delete/i,
      }
    );

    await user.click(confirmDeleteButton);

    await waitFor(
      () => {
        expect(deleteJobAlert).not.toBeInTheDocument();
        expect(jobTableRow).not.toBeInTheDocument();
      },
      {
        timeout: 5000,
      }
    );

    expect(
      screen.getByText(/job deleted!/i)
    ).toBeInTheDocument();
  });
});
