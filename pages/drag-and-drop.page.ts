import { expect, Locator, Page, test } from '@playwright/test';
import { BasePage } from './base.page';

export class DragAndDropPage extends BasePage {
  readonly squire: Locator = this.page.locator('.column');

  constructor(page: Page) {
    super(page, '/drag_and_drop');
  }

  async squareShouldHaveHeader(indexSquare: number, header: string) {
    await test.step(`[${indexSquare}] квадрат содержит заголовок "${header}"`, async () => {
      await expect(this.squire.nth(indexSquare).locator('header')).toHaveText(header);
    });
  }

  async getLocationSquire(indexSquare: number) {
    const box = await this.squire.nth(indexSquare).boundingBox();
    const x = box!.x + box!.width / 2;
    const y = box!.y + box!.height / 2;
    return { x, y };
  }
}
