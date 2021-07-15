/* eslint-disable @typescript-eslint/ban-types */
import { ScreenshotOptions } from 'puppeteer-core';
import { Page } from 'puppeteer-core/lib/cjs/puppeteer/common/Page';

interface Command {
  name: string;
  func: (...args: any[]) => Promise<any>;
  attachToElement?: boolean;
}

const commands: Command[] = [
  {
    name: 'waitForReady',
    func: async (milliseconds = 500): Promise<string> => {
      return await browser.executeAsync(function (milliseconds, done) {
        const interval = setInterval(() => {
          if (document.readyState === 'complete') {
            clearInterval(interval);
            done(document.readyState);
          }
        }, milliseconds as number);
      }, milliseconds);
    },
    attachToElement: false,
  },
  {
    name: 'puppeteerScreenshot',
    func: async (
      options: ScreenshotOptions,
      page?: Page
    ): Promise<{ value: string | void | Buffer }> => {
      let puppeteerPage: Page;
      if (!page) {
        const puppeteer = await browser.getPuppeteer();
        puppeteerPage = (await puppeteer.pages())[0];
      } else {
        puppeteerPage = page;
      }
      const result = await puppeteerPage.screenshot(options);
      return { value: result };
    },
    attachToElement: false,
  },
];

export default commands;
