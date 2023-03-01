import DashboardEditOrganizationPage from '@/pages/dashboard/organization/edit';
import { getUser } from '@/testing/mocks/utils';
import { testData } from '@/testing/test-data';
import {
  appRenderWithUserEvent,
  screen,
  waitFor,
  waitForLoadingToFinish,
} from '@/testing/test-utils';

const organization = testData.organizations[0];

const router = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => router,
}));

jest.mock('@/features/auth', () => ({
  useUser: () => ({ data: getUser() }),
}));

const organizationUpdatedData = {
  name: 'New Name',
  email: 'New Email',
  phone: 'New Phone',
  info: 'New Info',
};

describe('#PAGE - Dashboard Edit Organization Page', () => {
  it('should edit the organization', async () => {
    const { user } = appRenderWithUserEvent(
      <DashboardEditOrganizationPage />
    );

    await waitForLoadingToFinish();

    const nameInput = screen.getByRole('textbox', {
      name: /name/i,
    });

    const emailInput = screen.getByRole('textbox', {
      name: /email/i,
    });

    const phoneInput = screen.getByRole('textbox', {
      name: /phone/i,
    });

    const infoInput = screen.getByRole('textbox', {
      name: /info/i,
    });

    const submitButton = screen.getByRole('button', {
      name: 'Edit',
    });

    // Check if the form is filled with the organization data
    expect(nameInput).toHaveValue(organization.name);
    expect(emailInput).toHaveValue(organization.email);
    expect(phoneInput).toHaveValue(organization.phone);
    expect(infoInput).toHaveValue(organization.info);

    // Clear the form
    await user.clear(nameInput);
    await user.clear(emailInput);
    await user.clear(phoneInput);
    await user.clear(infoInput);

    // Fill it with new data
    await user.type(nameInput, organizationUpdatedData.name);
    await user.type(emailInput, organizationUpdatedData.email);
    await user.type(phoneInput, organizationUpdatedData.phone);
    await user.type(infoInput, organizationUpdatedData.info);

    // Check if the form is filled with the new data
    expect(nameInput).toHaveValue(organizationUpdatedData.name);
    expect(emailInput).toHaveValue(
      organizationUpdatedData.email
    );
    expect(phoneInput).toHaveValue(
      organizationUpdatedData.phone
    );
    expect(infoInput).toHaveValue(organizationUpdatedData.info);

    await user.click(submitButton);

    await waitFor(() =>
      expect(
        screen.getByText(/organization edited!/i)
      ).toBeInTheDocument()
    );

    expect(router.push).toBeCalled();
  });
});
