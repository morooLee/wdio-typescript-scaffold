/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Given,
  When,
  Then,
  Before,
  BeforeAll,
  BeforeStep,
  After,
  AfterAll,
  AfterStep,
} from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
  login: LoginPage,
};
type Pages = keyof typeof pages;

Given(/^I am on the (\w+) page$/, async (page: Pages) => {
  await pages[page].open();
});

When(
  /^I login with (\w+) and (.+)$/,
  async (username: string, password: string) => {
    await LoginPage.login(username, password);
  }
);

Then(/^I should see a flash message saying (.*)$/, async (message: string) => {
  await expect(SecurePage.flashAlert).not.toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
