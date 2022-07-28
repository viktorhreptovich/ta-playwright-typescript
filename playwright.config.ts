import type { PlaywrightTestConfig } from '@playwright/test';
import { expect } from '@playwright/test';
import { toBeSelected } from './utils/matchers';

expect.extend({ toBeSelected });

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['dot'], ['allure-playwright', {
    detail: true,
    outputFolder: 'allure-results',
    suiteTitle: true,
  }]],
  use: {
    actionTimeout: 0,
    baseURL: 'http://the-internet.herokuapp.com',
    trace: 'on-first-retry',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
  },
};

export default config;
