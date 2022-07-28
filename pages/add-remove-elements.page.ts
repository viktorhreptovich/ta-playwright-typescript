import { expect, Page, test } from '@playwright/test';
import { BasePage } from './base.page';

export class AddRemoveElementsPage extends BasePage {
  readonly addElementButton = this.page.locator('text=Add Element');
  readonly deleteButtons = this.page.locator('button.added-manually');

  constructor(page: Page) {
    super(page, '/add_remove_elements/');
  }

  async clickAddElementButton() {
    await test.step('Нажать кнопку "Add Element"', async () => {
      await this.addElementButton.click();
    });
  }

  async clickDeleteButton(index: number) {
    await test.step(`Нажать [${index}] кнопку "Delete"`, async () => {
      await this.deleteButtons.nth(index).click();
    });
  }

  async countOfDeleteButtonShouldBeEqual(count: number) {
    await test.step(`Количество кнопок "Delete" равно ${count}`, async () => {
      await expect(this.deleteButtons).toHaveCount(count);
    });
  }
}
