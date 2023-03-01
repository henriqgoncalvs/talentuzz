import { testData } from '../../src/testing/test-data';

const user = testData.users[0];

const job = testData.jobs[0];
const jobToBeDeleted = testData.jobs[1];

describe('dashboard', () => {
  it('should authenticate into the dashboard', () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('http://localhost:3000/dashboard/jobs');

    cy.url().should(
      'equal',
      'http://localhost:3000/auth/login?redirect=/dashboard/jobs'
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

    cy.findByRole('heading', {
      name: /jobs/i,
    }).should('exist');
  });

  it('should navigate to and visit the job details page', () => {
    cy.url().should(
      'equal',
      'http://localhost:3000/dashboard/jobs'
    );

    cy.findByRole('row', {
      name: new RegExp(
        `${job.position} ${job.department} ${job.location} View`,
        'i'
      ),
    }).within(() => {
      cy.findByRole('link', {
        name: /view/i,
      }).click();
    });

    cy.findByRole('heading', {
      name: job.position,
    }).should('exist');

    cy.findByText(new RegExp(job.info, 'i')).should('exist');
  });

  it('should create a new job', () => {
    cy.go('back');

    cy.findByRole('link', {
      name: /create job/i,
    }).click();

    const jobData = {
      position: 'Software Engineer',
      location: 'London',
      department: 'Engineering',
      info: 'Lorem Ipsum',
    };

    cy.findByRole('textbox', {
      name: /position/i,
    }).type(jobData.position);
    cy.findByRole('textbox', {
      name: /department/i,
    }).type(jobData.department);
    cy.findByRole('textbox', {
      name: /location/i,
    }).type(jobData.location);
    cy.findByRole('textbox', {
      name: /info/i,
    }).type(jobData.info);

    cy.findByRole('button', {
      name: /create/i,
    }).click();

    cy.findByText(/job created/i).should('exist');
  });

  it('should edit a job', () => {
    cy.url().should(
      'equal',
      'http://localhost:3000/dashboard/jobs'
    );

    cy.findByRole('row', {
      name: new RegExp(
        `${job.position} ${job.department} ${job.location} View`,
        'i'
      ),
    }).within(() => {
      cy.findByRole('link', {
        name: /edit/i,
      }).click();
    });

    cy.url().should(
      'equal',
      `http://localhost:3000/dashboard/jobs/edit/${job.id}`
    );

    const jobUpdateData = {
      position: 'New Position',
      location: 'New Location',
      department: 'New Department',
      info: 'New Info',
    };

    cy.findByRole('textbox', {
      name: /position/i,
    })
      .clear()
      .type(jobUpdateData.position);

    cy.findByRole('textbox', {
      name: /department/i,
    })
      .clear()
      .type(jobUpdateData.department);

    cy.findByRole('textbox', {
      name: /location/i,
    })
      .clear()
      .type(jobUpdateData.location);

    cy.findByRole('textbox', {
      name: /info/i,
    })
      .clear()
      .type(jobUpdateData.info);

    cy.findByRole('button', {
      name: /Edit/i,
    }).click();

    cy.findByText(/job edited!/i).should('exist');

    // Check if the job is updated in the table
    cy.findByRole('row', {
      name: new RegExp(
        `${jobUpdateData.position} ${jobUpdateData.department} ${jobUpdateData.location} View`,
        'i'
      ),
    });
  });

  it('should delete a job', () => {
    cy.url().should(
      'equal',
      'http://localhost:3000/dashboard/jobs'
    );

    cy.findByRole('row', {
      name: new RegExp(
        `${jobToBeDeleted.position} ${jobToBeDeleted.department} ${jobToBeDeleted.location} View`,
        'i'
      ),
    }).within(() => {
      cy.findByRole('button', {
        name: /delete/i,
      }).click();
    });

    cy.findByRole('alertdialog').within(() => {
      cy.findByRole('button', {
        name: /delete/i,
      }).click();
    });

    cy.findByText(/job deleted!/i).should('exist');

    cy.findByRole('alertdialog').should('not.exist');

    // Check if the job is deleted from the table
    cy.findByRole('row', {
      name: new RegExp(
        `${jobToBeDeleted.position} ${jobToBeDeleted.department} ${jobToBeDeleted.location} View`,
        'i'
      ),
    }).should('not.exist');
  });

  it('should log out from the dashboard', () => {
    cy.url().should(
      'equal',
      'http://localhost:3000/dashboard/jobs'
    );

    cy.findByRole('button', {
      name: /log out/i,
    }).click();

    cy.url().should('equal', 'http://localhost:3000/auth/login');
  });
});
