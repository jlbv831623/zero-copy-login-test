const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

describe('Login Tests', () => {
    
    beforeEach(() => {
        LoginPage.navigate();
    });

    it('Valid Login', () => {
        LoginPage.login('standard_user', 'secret_sauce');
        InventoryPage.elements.title().should('contain.text', 'Products');
    });

    it('Invalid Username', () => {
        LoginPage.login('invalid_user', 'secret_sauce');
        LoginPage.elements.errorMsg()
            .should('be.visible')
            .and('contain.text', 'Username and password do not match');
    });

    it('Invalid Password', () => {
        LoginPage.login('standard_user', 'wrong_pass');
        LoginPage.elements.errorMsg()
            .should('be.visible')
            .and('contain.text', 'Username and password do not match');
    });

    it('missing username', () => {
  cy.visit('https://www.saucedemo.com/');

  // Username vacío → NO usamos type
  cy.get('#user-name').clear();

  // Password sí se llena
  cy.get('#password').type('secret_sauce');

  // Click login
  cy.get('#login-button').click();

  // Validación
  cy.get('.error-message-container')
    .should('contain', 'Username is required');
});


it('missing password', () => {
  cy.visit('https://www.saucedemo.com/');

  // Username sí se llena
  cy.get('#user-name').type('standard_user');

  // Password vacío → NO usamos type
  cy.get('#password').clear();

  // Click login
  cy.get('#login-button').click();

  cy.get('.error-message-container')
    .should('contain', 'Password is required');
});


});
