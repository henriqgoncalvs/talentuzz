import { formatJobData } from '@/features/jobs';
import PublicJobPage, {
  getServerSideProps,
} from '@/pages/organizations/[organizationId]/jobs/[jobId]';
import { testData } from '@/testing/test-data';
import { appRender, screen } from '@/testing/test-utils';

const job = testData.jobs[0];
const organization = testData.organizations.find(
  (org) => org.id === job.organizationId
)!;

describe('#PAGE - Public Job Page', () => {
  it('should use getServerSideProps that fetches and returns the proper data', async () => {
    const { props } = await getServerSideProps({
      params: {
        jobId: job.id,
        organizationId: organization.id,
      },
    } as any);

    expect(props.job).toEqual(job);
    expect(props.organization).toEqual(organization);
  });

  it('should render the job details', async () => {
    appRender(
      <PublicJobPage organization={organization} job={job} />
    );

    const organizationName = screen.getByText(organization.name);

    const jobPosition = screen.getByRole('heading', {
      name: job.position,
    });
    const jobLocation = screen.getByText(job.position);
    const jobSalaryRange = screen.getByText(
      formatJobData(job.salaryRange, 'salaryRange')
    );
    const jobEmploymentType = screen.getByText(
      formatJobData(job.employmentType, 'employmentType')
    );
    const jobExperienceLevel = screen.getByText(
      formatJobData(job.experienceLevel, 'experienceLevel')
    );

    const info = screen.getByText(job.info);

    expect(
      screen.getByRole('link', { name: /apply/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/share/i)).toBeInTheDocument();

    expect(organizationName).toBeInTheDocument();
    expect(jobPosition).toBeInTheDocument();
    expect(jobLocation).toBeInTheDocument();
    expect(jobSalaryRange).toBeInTheDocument();
    expect(jobEmploymentType).toBeInTheDocument();
    expect(jobExperienceLevel).toBeInTheDocument();
    expect(info).toBeInTheDocument();
  });

  it('should render the not found message if the data does not exist', async () => {
    const { rerender } = appRender(
      <PublicJobPage organization={null} job={null} />
    );

    const notFoundMessage = screen.getByRole('heading', {
      name: /not found/i,
    });

    expect(notFoundMessage).toBeInTheDocument();

    rerender(
      <PublicJobPage organization={organization} job={null} />
    );

    expect(notFoundMessage).toBeInTheDocument();

    rerender(<PublicJobPage organization={null} job={job} />);

    expect(notFoundMessage).toBeInTheDocument();

    rerender(
      <PublicJobPage
        organization={organization}
        job={{ ...job, organizationId: '123' }}
      />
    );

    expect(notFoundMessage).toBeInTheDocument();
  });
});
