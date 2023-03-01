import DashboardOrganizationPage from '@/pages/dashboard/organization';
import { testData } from '@/testing/test-data';
import {
  appRender,
  screen,
  waitForLoadingToFinish,
} from '@/testing/test-utils';

const organization = testData.organizations[0];

describe('#PAGE - Dashboard Organization Page', () => {
  it('should render the organization details', async () => {
    appRender(<DashboardOrganizationPage />);

    await waitForLoadingToFinish();

    const organizationName = screen.getByRole('heading', {
      name: organization.name,
    });

    const emailInfo = screen.getByRole('heading', {
      name: organization.email,
    });

    const phoneInfo = screen.getByRole('heading', {
      name: organization.phone,
    });

    const info = screen.getByText(organization.info);

    expect(organizationName).toBeInTheDocument();
    expect(emailInfo).toBeInTheDocument();
    expect(phoneInfo).toBeInTheDocument();
    expect(info).toBeInTheDocument();
  });
});
