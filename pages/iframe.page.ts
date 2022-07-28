import { expect, Page, test } from '@playwright/test';
import { BasePage } from './base.page';

export class IframePage extends BasePage {
  readonly tinyMCEIFrame = this.page.frameLocator('#mce_0_ifr');
  readonly tinyMCEEditor = this.tinyMCEIFrame.locator('body');

  constructor(page: Page) {
    super(page, '/iframe');
  }

  async tinyMCEShouldHaveText(text: string) {
    await test.step(`Редактор содержит текст: "${text}"`, async () => {
      await expect(this.tinyMCEEditor).toHaveText(text);
    });
  }

  async typeTinyMCE(text: string) {
    await test.step(`Ввести в редакторе текст: "${text}"`, async () => {
      await this.tinyMCEEditor.type(text);
    });
  }
}
