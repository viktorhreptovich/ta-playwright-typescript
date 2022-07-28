import { Page, test } from '@playwright/test';
import config from '../playwright.config';

export class BasePage {
  readonly page: Page;
  readonly url: string;

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = url;
  }

  async open() {
    await test.step(`Открыть страницу: ${config.use?.baseURL + this.url}`, async () => {
      await this.page.goto(this.url);
    });
  }

  async refresh() {
    await test.step('Обновить страницу', async () => {
      await this.page.reload();
    });
  }
}
