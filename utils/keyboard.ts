import { Keyboard, Page, test } from '@playwright/test';
import { Keys } from './keys';

export class KeyboardPage {
  readonly page: Page;
  readonly keyboard: Keyboard;

  constructor(page: Page) {
    this.page = page;
    this.keyboard = this.page.keyboard;
  }

  async type(text: string) {
    await test.step(`Набрать на клавиатуре "${text}"`, async () => {
      await this.keyboard.type(text);
    });
  }

  async press(key: Keys) {
    await test.step(`Нажать на клавиатуре "${key}"`, async () => {
      await this.keyboard.press(key);
    });
  }

  async pressWithKey(key: Keys, char: string) {
    await test.step(`Нажать на клавиатуре "${key}+${char}"`, async () => {
      await this.keyboard.press(`${key}+${char}`);
    });
  }

  async down(key: Keys) {
    await test.step(`Зажать на клавиатуре "${key}"`, async () => {
      await this.keyboard.down(key);
    });
  }

  async up(key: Keys) {
    await test.step(`Отпустить на клавиатуре "${key}"`, async () => {
      await this.keyboard.up(key);
    });
  }
}
