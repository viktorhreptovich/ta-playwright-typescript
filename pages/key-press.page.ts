import { expect, Page, test } from '@playwright/test';
import { BasePage } from './base.page';

export class KeyPressPage extends BasePage {
  readonly keyInput = this.page.locator('#target');
  readonly result = this.page.locator('#result');

  constructor(page: Page) {
    super(page, '/key_presses');
  }

  async clickKeyInput() {
    await test.step('Нажать на поле ввода "Key Presses"', async () => {
      await this.keyInput.click();
    });
  }

  async keyInputShouldHaveText(text: string) {
    await test.step(`Поле ввода "Key Presses" содержит текст "${text}"`, async () => {
      await expect(this.keyInput).toHaveValue(text);
    });
  }

  async resultShouldHaveText(text: string) {
    await test.step(`Поле результата "Key Presses" содержит текст "${text}"`, async () => {
      await expect(this.result).toHaveText(text);
    });
  }
}
