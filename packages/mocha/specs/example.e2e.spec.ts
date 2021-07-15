import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', function () {
  it('should login with valid credentials', async function () {
    await LoginPage.open();
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(await SecurePage.flashAlert).toBeExisting();
  });
  describe('Describe: Depth 1', function () {
    describe('Describe: Depth 2', function () {
      it('Test Pass', async function () {
        expect(true).toEqual(true);
      });
      it('Test Fail', function () {
        expect(true).toEqual(false);
      });
      it.skip('Test Skip', function () {
        console.log('This test is skipped');
      });
    });
  });
});
