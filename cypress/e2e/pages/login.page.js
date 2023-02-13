// @ts-check
/// <reference types="cypress" />
/// <reference path='../../support/index.ts' />

class LoginPage {
  loginUrl = '/qa-portal/registerlogin/registerlogin.php';

  get emailInput() {
    return cy.get('input[name=username]');
  }

  get passwordInput() {
    return cy.get('input[name=password]');
  }

  get submitButton() {
    return cy.get('input[type=submit]');
  }

  get errorList() {
    return cy.get('.has-error');
  }

  get usernameError() {
    return this.errorList.eq(0);
  }

  get passwordError() {
    return this.errorList.eq(1);
  }

  get title() {
    return cy.get('h1');
  }

  goToLogin() {
    cy.visit(this.loginUrl);
  }

  fillUsername(value) {
    this.emailInput.clear();
    this.emailInput.type(value);
  }

  fillPassword(value) {
    this.passwordInput.clear();
    this.passwordInput.type(value);
  }

  submit() {
    this.submitButton.click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

export default LoginPage;
