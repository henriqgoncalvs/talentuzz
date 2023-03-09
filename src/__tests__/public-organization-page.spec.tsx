import {
  formatJobData,
  JobWithOrganization,
} from '@/features/jobs';
import PublicOrganizationPage, {
  getServerSideProps,
} from '@/pages/organizations/[organizationId]';
import { testData } from '@/testing/test-data';
import { appRender, screen, within } from '@/testing/test-utils';
import { sortJobsByCreatedAt } from '@/utils/sort-by-createdAt';

const organization = testData.organizations[0];
const jobs: JobWithOrganization[] = testData.jobs
  .filter((job) => job.organizationId === organization.id)
  .map((job) => ({
    ...job,
    organization: testData.organizations.find(
      (org) => org.id === job.organizationId
    )!,
  }));

describe('#PAGE - Public Organization Page', () => {
  it('should use getServerSideProps that fetches and returns the proper data', async () => {
    const { props } = await getServerSideProps({
      params: {
        organizationId: organization.id,
      },
    } as any);

    expect(props.organization).toEqual(organization);
    expect(sortJobsByCreatedAt(props.jobs)).toEqual(
      sortJobsByCreatedAt(jobs)
    );
  });

  it('should render the organization details', async () => {
    appRender(
      <PublicOrganizationPage
        organization={organization}
        jobs={jobs}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: organization.name,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: organization.email,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: organization.phone,
      })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/share/i)).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /see jobs/i,
      })
    ).toBeInTheDocument();

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
        organization.name
      );
      expect(jobApplyButton).toHaveAttribute(
        'href',
        `/organizations/${job.organizationId}/jobs/${job.id}`
      );
    });
  });

  it('should render the not found message if the organization is not found', async () => {
    appRender(
      <PublicOrganizationPage organization={null} jobs={[]} />
    );

    const notFoundMessage = screen.getByRole('heading', {
      name: /not found/i,
    });

    expect(notFoundMessage).toBeInTheDocument();
  });
});
