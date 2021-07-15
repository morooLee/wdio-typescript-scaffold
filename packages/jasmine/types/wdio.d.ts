/* eslint-disable @typescript-eslint/ban-ts-comment */
declare namespace WebdriverIO {
  interface Browser {
    waitForReady: (milliseconds: number) => Promise<string>;
    puppeteerScreenshot: () => Promise<string | void | Buffer>;
  }

  // @ts-expect-error
  interface MultiRemoteBrowser {
    waitForReady: (milliseconds: number) => Promise<string>;
    puppeteerScreenshot: () => Promise<string | void | Buffer>;
  }
}
