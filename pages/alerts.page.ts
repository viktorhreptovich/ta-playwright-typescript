import { expect, Page, test } from '@playwright/test';
import { BasePage } from './base.page';

export class AlertsPage extends BasePage {
  readonly alertButton = this.page.locator('button').nth(0);
  readonly confirmButton = this.page.locator('ul button').nth(1);
  readonly promptButton = this.page.locator('ul button').nth(2);
  readonly result = this.page.locator('#result');

  constructor(page: Page) {
    super(page, '/javascript_alerts');
  }

  async clickAlertButton() {
    await test.step('Нажать кнопку "Click for JS Alert"', async () => {
      await this.alertButton.click();
    });
  }

  async clickConfirmButton() {
    await test.step('Нажать кнопку "Click for JS Confirm"', async () => {
      await this.confirmButton.click();
    });
  }

  async clickPromptButton() {
    await test.step('Нажать кнопку "Click for JS Prompt"', async () => {
      await this.promptButton.click();
    });
  }

  async resultShouldHaveText(result: string) {
    await test.step(`В поле "Result" отображается текст: "${result}"`, async () => {
      await expect(this.result).toHaveText(result);
    });
  }
}
