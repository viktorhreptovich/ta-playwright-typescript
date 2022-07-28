import { expect, Page, test } from '@playwright/test';

export class Dialog {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitAndAcceptAlert(name: string) {
    await test.step(`При появлении alert "${name}" нажать "Ok"`, async () => {
      this.page.once('dialog', async (dialog) => {
        await test.step(`Alert "${name}" открыт. Нажать "Ok"`, async () => {
          await expect(dialog.message()).toEqual(name);
          await dialog.accept();
        });
      });
    });
  }

  async waitAndAcceptConfirm(name: string) {
    await test.step(`При появлении confirm "${name}" нажать "Ok"`, async () => {
      this.page.once('dialog', async (dialog) => {
        await test.step(`Confirm "${name}" открыт. Нажать "Ok"`, async () => {
          await expect(dialog.message()).toEqual(name);
          await dialog.accept();
        });
      });
    });
  }

  async waitAndDismissConfirm(name: string) {
    await test.step(`При появлении confirm "${name}" нажать "Отмена"`, async () => {
      this.page.once('dialog', async (dialog) => {
        await test.step(`Confirm "${name}" открыт. Нажать "Отмена"`, async () => {
          await expect(dialog.message()).toEqual(name);
          await dialog.dismiss();
        });
      });
    });
  }

  async waitAndAcceptPrompt(name: string, value: string) {
    await test.step(`При появлении prompt "${name}" ввести "${value}" и нажать "Ok"`, async () => {
      this.page.once('dialog', async (dialog) => {
        await test.step(`Confirm "${name}" открыт. Ввести "${value}". Нажать "Ok"`, async () => {
          await expect(dialog.message()).toEqual(name);
          await dialog.accept(value);
        });
      });
    });
  }

  async waitAndDismissPrompt(name: string) {
    await test.step(`При появлении prompt "${name}" и нажать "Отмена"`, async () => {
      this.page.once('dialog', async (dialog) => {
        await test.step(`Confirm "${name}" открыт. Нажать "Отмена"`, async () => {
          await expect(dialog.message()).toEqual(name);
          await dialog.dismiss();
        });
      });
    });
  }
}
