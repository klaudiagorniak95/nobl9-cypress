import * as faker from 'faker';

const blogEntry = 'Why do I need SLOs if I already have monitoring?';
const userData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    companyName: faker.company.companyName(),
    email: faker.internet.email()
};

describe('QA recruitment task', () => {
    before(() => {
        cy.visit('/');
    });

    it('Simple test of Nobl9 page', () => {

        // Go to blog tab, verify if blogEntry exists, open it.
        cy.contains('Blog').click();
        cy.contains(blogEntry).should('exist');
        cy.contains(blogEntry).click();

        // Click on 'Get started' button on bottom of the page, check the 'Talk to Nobl9 SLOgician' checkbox, fill all the fields and close the modal.
        cy.get('.d-inline-flex > .button').click();
        cy.get('.hubspot-form-tabs > :nth-child(2) > span').click();
        cy.get('#firstname-cb257c24-5c20-4f6e-94ae-7253448de96f').type(userData.firstName);
        cy.get('#lastname-cb257c24-5c20-4f6e-94ae-7253448de96f').type(userData.lastName);;
        cy.get('#company-cb257c24-5c20-4f6e-94ae-7253448de96f').type(userData.companyName);
        cy.get('#email-cb257c24-5c20-4f6e-94ae-7253448de96f').type(userData.email);
        cy.get('.modal-close').click();
    });
});