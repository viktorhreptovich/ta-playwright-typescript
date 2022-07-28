import { expect, Locator, Page, test } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckboxesPage extends BasePage {
  readonly checkbox: Locator = this.page.locator('#checkboxes input');

  constructor(page: Page) {
    super(page, '/checkboxes');
  }

  async checkCheckbox(index: number) {
    await test.step(`Выбрать [${index}] чекбокс`, async () => {
      await this.checkbox.nth(index).check();
    });
  }

  async uncheckCheckbox(index: number) {
    await test.step(`Снять [${index}] чекбокс`, async () => {
      await this.checkbox.nth(index).uncheck();
    });
  }

  async checkboxShouldBeChecked(index: number) {
    await test.step(`[${index}] чекбокс выбран`, async () => {
      await expect(this.checkbox.nth(index)).toBeChecked();
    });
  }

  async checkboxShouldBeUnchecked(index: number) {
    await test.step(`[${index}] чекбокс невыбран`, async () => {
      await expect(this.checkbox.nth(index)).not.toBeChecked();
    });
  }
}
