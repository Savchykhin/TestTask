import LoginPage from './pages/login.page';

describe('Sign In', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.goToLogin();
    loginPage.title.should('have.text', 'AQA internship Login');
  });

  it('should show an error message on empty input', () => {
    loginPage.submit();
    loginPage.usernameError
      .should('be.visible')
      .contains('Please enter username.');
    loginPage.passwordError
      .should('be.visible')
      .contains('Please enter your password.');
  });

  it('should show an error message with non existing username', () => {
    loginPage.login('username', 'password');
    loginPage.usernameError
      .should('be.visible')
      .contains('No account found with that username.');
  });
});
