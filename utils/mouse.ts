import { Mouse, Page, test } from '@playwright/test';

export class MousePage {
  readonly page: Page;
  readonly mouse: Mouse;

  constructor(page: Page) {
    this.page = page;
    this.mouse = this.page.mouse;
  }

  async move(position: { x: number; y: number }) {
    await test.step(`Перевести курсор мыши в позицию {x:${position.x}, y:${position.y}}`, async () => {
      await this.mouse.move(position.x, position.y);
    });
  }

  async down() {
    await test.step('Нажать левую клавишу мыши', async () => {
      await this.mouse.down();
    });
  }

  async up() {
    await test.step('Отпустить левую клавишу мыши', async () => {
      await this.mouse.up();
    });
  }
}
