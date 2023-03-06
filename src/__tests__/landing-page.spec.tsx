import LandingPage from '@/pages';
import { testData } from '@/testing/test-data';
import {
  appRender,
  screen,
  waitForLoadingToFinish,
  within,
} from '@/testing/test-utils';

const latestJobs = testData.jobs.slice(0, 6).map((job) => ({
  ...job,
  organization: testData.organizations.find(
    (org) => org.id === job.organizationId
  )!,
}));

describe('#PAGE - Landing Page', () => {
  it('should display the landing page ', async () => {
    const { asFragment } = appRender(
      <LandingPage latestJobs={latestJobs} />
    );

    await waitForLoadingToFinish();

    expect(asFragment()).toMatchSnapshot();

    const heroSection = screen.getByRole('banner');

    // Hero Section
    expect(
      within(heroSection).getByRole('link', {
        name: /find your next job/i,
      })
    ).toBeInTheDocument();
    expect(
      within(heroSection).getByRole('link', {
        name: /i'm a startup/i,
      })
    ).toBeInTheDocument();
  });
});
