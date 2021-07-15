import { Browser } from 'puppeteer-core/lib/cjs/puppeteer/common/Browser';
import { Page } from 'puppeteer-core/lib/cjs/puppeteer/common/Page';
import { ConsoleMessage } from 'puppeteer-core/lib/cjs/puppeteer/common/ConsoleMessage';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
  let puppeteer: Browser;
  let page: Page;

  beforeAll(async () => {
    puppeteer = await browser.getPuppeteer();
    page = (await puppeteer.pages())[0];

    page.on('console', (log: ConsoleMessage) => {
      if (log.type() === 'error') {
        console.log(`${log.type().toUpperCase()}: ${log.text()}`);
      }
    });
  });
  it('should login with valid credentials', async function () {
    await LoginPage.open();
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(await SecurePage.flashAlert).toBeExisting();
  });
  it('Test Fail', function () {
    expect(true).toEqual(false);
  });
  xit('Test Skip', function () {
    console.log('This test is skipped');
  });
  describe('Hook Test', function () {
    beforeAll(function () {
      console.log('This hook is "beforeAll"');
    });
    beforeEach(function () {
      console.log('This hook is "beforeEach"');
      throw new Error('Fail to "beforeEach"');
    });
    afterEach(function () {
      console.log('This hook is "afterEach"');
    });
    afterAll(function () {
      console.log('This hook is "afterAll"');
      throw new Error('Fail to "afterAll"');
    });
    it('Results of this test are pending. Because the before-hook fails.', function () {
      expect(true).toEqual(true);
    });
  });
  describe('Describe: Root', function () {
    describe('Describe: Depth 1', function () {
      it('Test Pass', async function () {
        expect(true).toEqual(true);
      });
      it('Test Fail', function () {
        expect(true).toEqual(false);
      });
      xit('Test Skip', function () {
        console.log('This test is skipped');
      });
    });
  });
});
