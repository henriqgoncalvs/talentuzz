import DashboardCreateJobPage from '@/pages/dashboard/jobs/create';
import {
  appRenderWithUserEvent,
  screen,
  waitFor,
} from '@/testing/test-utils';

const router = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => router,
}));

const jobData = {
  position: 'Software Engineer',
  location: 'London',
  department: 'Engineering',
  info: 'Lorem Ipsum',
};

describe('#PAGE - Dashboard Create Job Page', () => {
  it('should create a new job', async () => {
    const { user } = appRenderWithUserEvent(
      <DashboardCreateJobPage />
    );

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
      name: /create/i,
    });

    await user.type(positionInput, jobData.position);
    await user.type(locationInput, jobData.location);
    await user.type(departmentInput, jobData.department);
    await user.type(infoInput, jobData.info);

    expect(positionInput).toHaveValue(jobData.position);
    expect(locationInput).toHaveValue(jobData.location);
    expect(departmentInput).toHaveValue(jobData.department);
    expect(infoInput).toHaveValue(jobData.info);

    await user.click(submitButton);

    await waitFor(() =>
      expect(
        screen.getByText(/job created!/i)
      ).toBeInTheDocument()
    );

    expect(router.push).toBeCalled();
  });
});
