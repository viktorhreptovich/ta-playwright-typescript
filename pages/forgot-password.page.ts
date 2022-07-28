import { expect, Page, test } from '@playwright/test';
import { BasePage } from './base.page';

export class ForgotPasswordPage extends BasePage {
  readonly emailInput = this.page.locator('#email');

  readonly retrievePasswordButton = this.page.locator('#form_submit');

  constructor(page: Page) {
    super(page, '/forgot_password');
  }

  async typeEmailInput(text: string) {
    await test.step(`Ввести в поле "Email" текст: "${text}"`, async () => {
      await this.emailInput.type(text);
    });
  }

  async emailInputShouldHaveText(text: string) {
    await test.step(`Поле "Email" содержит текст: "${text}"`, async () => {
      await expect(this.emailInput).toHaveValue(text);
    });
  }
}
