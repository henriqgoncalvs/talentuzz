import { formatJobData } from '@/features/jobs';
import PublicJobsPage from '@/pages/jobs';
import { testData } from '@/testing/test-data';
import {
  appRender,
  screen,
  waitForLoadingToFinish,
  within,
} from '@/testing/test-utils';

const jobs = testData.jobs;
const organizations = testData.organizations;

describe('#PAGE - Public Jobs List Page', () => {
  it('should render the page with all the jobs', async () => {
    appRender(<PublicJobsPage />);

    await waitForLoadingToFinish();

    const title = screen.getByRole('heading', {
      name: /find your dream job/i,
    });

    expect(title).toBeInTheDocument();

    jobs.forEach((job) => {
      const jobCard = screen.getByTestId(`job-card-${job.id}`);

      const jobDepartment = within(jobCard).getByTestId(
        'job-card-department'
      );
      const jobPosition = within(jobCard).getByTestId(
        'job-card-position'
      );
      const jobLocation = within(jobCard).getByTestId(
        'job-card-location'
      );
      const jobExperienceLevel = within(jobCard).getByTestId(
        'job-card-experience-level'
      );
      const jobSalaryRange = within(jobCard).getByTestId(
        'job-card-salary-range'
      );
      const jobEmploymentType = within(jobCard).getByTestId(
        'job-card-employment-type'
      );
      const jobOrganization = within(jobCard).getByTestId(
        'job-organization'
      );
      const jobApplyButton = within(jobCard).getByRole('link', {
        name: /see more/i,
      });

      expect(jobDepartment.textContent).toBe(job.department);
      expect(jobPosition.textContent).toBe(job.position);
      expect(jobLocation.textContent).toBe(job.location);
      expect(jobSalaryRange.textContent).toBe(
        formatJobData(job.salaryRange, 'salaryRange')
      );
      expect(jobEmploymentType.textContent).toBe(
        formatJobData(job.employmentType, 'employmentType')
      );
      expect(jobExperienceLevel.textContent).toBe(
        formatJobData(job.experienceLevel, 'experienceLevel')
      );
      expect(jobOrganization.textContent).toBe(
        organizations.find(
          (org) => org.id === job.organizationId
        )?.name ?? '--'
      );
      expect(jobApplyButton).toHaveAttribute(
        'href',
        `/organizations/${job.organizationId}/jobs/${job.id}`
      );
    });
  });
});
