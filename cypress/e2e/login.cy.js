// @ts-check
/// <reference types="cypress" />
/// <reference path='../support/index.ts' />

import LoginPage from './pages/login.page';

describe('Sign In', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.goToLogin();
    loginPage.title.should('have.text', 'AQA internship Login');
  });

  it('should show an error message on empty input', () => {
    //intercept login request
    cy.intercept('POST', loginPage.loginUrl, (req) => {
      expect(req.body).to.include('username=&password=');
    }).as('emptyLogin');
    loginPage.submit();
    //wait for login request is sent
    cy.wait('@emptyLogin').its('response.statusCode').should('eq', 200);
    loginPage.usernameError
      .should('be.visible')
      .contains('Please enter username.');
    loginPage.passwordError
      .should('be.visible')
      .contains('Please enter your password.');
  });

  it('should show an error message with non existing username', () => {
    const username = 'user123';
    const password = 'password123';
    //intercept login request
    cy.intercept('POST', loginPage.loginUrl, (req) => {
      expect(req.body).to.include(`username=${username}&password=${password}`);
    }).as('failedLogin');
    loginPage.login(username, password);
    //wait for login request is sent
    cy.wait('@failedLogin').its('response.statusCode').should('eq', 200);
    loginPage.usernameError
      .should('be.visible')
      .contains('No account found with that username.');
  });
});
