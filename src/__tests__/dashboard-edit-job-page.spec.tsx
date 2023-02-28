import DashboardEditJobPage from '@/pages/dashboard/jobs/edit/[jobId]';
import { testData } from '@/testing/test-data';
import {
  appRenderWithUserEvent,
  screen,
  waitFor,
  waitForLoadingToFinish,
} from '@/testing/test-utils';

const job = testData.jobs[0];

const router = {
  push: jest.fn(),
  query: {
    jobId: job.id,
  },
};

jest.mock('next/router', () => ({
  useRouter: () => router,
}));

const jobUpdatedData = {
  position: 'New Position',
  department: 'New Department',
  location: 'New Location',
  info: 'New Info',
};

describe('#PAGE - DashboardEditJobPage', () => {
  it('should edit a job', async () => {
    const { user } = appRenderWithUserEvent(
      <DashboardEditJobPage />
    );

    await waitForLoadingToFinish();

    const positionInput = screen.getByRole('textbox', {
      name: /position/i,
    });

    const locationInput = screen.getByRole('textbox', {
      name: /location/i,
    });

    const departmentInput = screen.getByRole('textbox', {
      name: /department/i,
    });

    const infoInput = screen.getByRole('textbox', {
      name: /info/i,
    });

    const submitButton = screen.getByRole('button', {
      name: 'Edit',
    });

    // Check if the form is filled with the job data
    expect(positionInput).toHaveValue(job.position);
    expect(locationInput).toHaveValue(job.location);
    expect(departmentInput).toHaveValue(job.department);
    expect(infoInput).toHaveValue(job.info);

    // Clear the form
    await user.clear(positionInput);
    await user.clear(departmentInput);
    await user.clear(locationInput);
    await user.clear(infoInput);

    // Fill it with new data
    await user.type(positionInput, jobUpdatedData.position);
    await user.type(departmentInput, jobUpdatedData.department);
    await user.type(locationInput, jobUpdatedData.location);
    await user.type(infoInput, jobUpdatedData.info);

    // Check if the form is filled with the new data
    expect(positionInput).toHaveValue(jobUpdatedData.position);
    expect(locationInput).toHaveValue(jobUpdatedData.location);
    expect(departmentInput).toHaveValue(
      jobUpdatedData.department
    );
    expect(infoInput).toHaveValue(jobUpdatedData.info);

    await user.click(submitButton);

    await waitFor(() =>
      expect(
        screen.getByText(/job edited!/i)
      ).toBeInTheDocument()
    );

    expect(router.push).toBeCalled();
  });
});
