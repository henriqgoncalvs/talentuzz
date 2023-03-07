import PublicOrganizationListPage, {
  getStaticProps,
} from '@/pages/organizations';
import { testData } from '@/testing/test-data';
import { appRender, screen, within } from '@/testing/test-utils';

const organizations = testData.organizations;

describe('#PAGE - Public Organizations List Page', () => {
  it('should use getServerSideProps that fetches and returns the proper data', async () => {
    const { props } = await getStaticProps();

    expect(props.organizations).toEqual(organizations);
  });

  it('should render the organization details', async () => {
    appRender(
      <PublicOrganizationListPage
        organizations={organizations}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: /find a job at one of these startups./i,
      })
    ).toBeInTheDocument();

    organizations.forEach((organization) => {
      const organizationCard = screen.getByTestId(
        `organization-card-${organization.id}`
      );

      const organizationName = within(
        organizationCard
      ).getByText(new RegExp(organization.name, 'i'));

      expect(organizationName.textContent).toBe(
        organization.name
      );

      expect(organizationCard).toHaveAttribute(
        'href',
        `/organizations/${organization.id}`
      );
    });
  });

  it('should render the not found message if the organization is not found', async () => {
    appRender(<PublicOrganizationListPage organizations={[]} />);

    const notFoundMessage = screen.getByText(
      /no organizations found/i
    );

    expect(notFoundMessage).toBeInTheDocument();
  });
});
