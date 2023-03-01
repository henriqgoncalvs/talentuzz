import { testData } from '../../src/testing/test-data';

const user = testData.users[0];

const organization = testData.organizations.filter(
  (organization) => organization.id === user.organizationId
)[0];

describe('dashboard organization', () => {
  it('should authenticate into the dashboard', () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('http://localhost:3000/dashboard/organization');

    cy.url().should(
      'equal',
      'http://localhost:3000/auth/login?redirect=/dashboard/organization'
    );

    cy.findByRole('textbox', {
      name: /email/i,
    }).type(user.email);

    cy.findByLabelText(/password/i).type(
      user.password.toLowerCase()
    );

    cy.findByRole('button', {
      name: /log in/i,
    }).click();
  });

  it('should navigate to and visit the organization details page', () => {
    cy.url().should(
      'equal',
      'http://localhost:3000/dashboard/organization'
    );

    cy.findByRole('heading', {
      name: organization.name,
    }).should('exist');

    cy.findByRole('heading', {
      name: organization.email,
    }).should('exist');

    cy.findByRole('heading', {
      name: organization.phone,
    }).should('exist');

    cy.findByText(new RegExp(organization.info, 'i')).should(
      'exist'
    );
  });

  it('should edit the organization', () => {
    cy.url().should(
      'equal',
      'http://localhost:3000/dashboard/organization'
    );

    cy.findByRole('link', {
      name: /edit/i,
    }).click();

    cy.url().should(
      'equal',
      `http://localhost:3000/dashboard/organization/edit`
    );

    const organizationUpdatedData = {
      name: 'New Name',
      email: 'New Email',
      phone: '12345678',
      info: 'New Info',
    };

    cy.findByRole('textbox', {
      name: /name/i,
    })
      .clear()
      .type(organizationUpdatedData.name);

    cy.findByRole('textbox', {
      name: /email/i,
    })
      .clear()
      .type(organizationUpdatedData.email);

    cy.findByRole('textbox', {
      name: /phone/i,
    })
      .clear()
      .type(organizationUpdatedData.phone);

    cy.findByRole('textbox', {
      name: /info/i,
    })
      .clear()
      .type(organizationUpdatedData.info);

    cy.findByRole('button', {
      name: /Edit/i,
    }).click();

    cy.findByText(/organization edited!/i).should('exist');

    // Check if the organization is updated in the table
    cy.findByRole('heading', {
      name: organizationUpdatedData.name,
    }).should('exist');
  });
});
