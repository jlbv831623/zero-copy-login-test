Cypress.Commands.add('login', (username, password) => {
  cy.get('#user-name', { timeout: 5000 }).should('be.visible').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});

