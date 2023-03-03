import LandingPage from '@/pages';
import {
  appRender,
  screen,
  waitForLoadingToFinish,
  within,
} from '@/testing/test-utils';

describe('#PAGE - Landing Page', () => {
  it('should display the landing page ', async () => {
    const { asFragment } = appRender(<LandingPage />);

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
