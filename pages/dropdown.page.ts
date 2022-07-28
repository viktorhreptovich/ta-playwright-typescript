import { expect, Locator, Page, test } from '@playwright/test';
import { BasePage } from './base.page';

export class DropdownPage extends BasePage {
  readonly dropdown: Locator = this.page.locator('#dropdown');
  readonly dropdownOption: Locator = this.dropdown.locator('option');

  constructor(page: Page) {
    super(page, '/dropdown');
  }

  async selectDropdownOptionByIndex(indexOption: number) {
    await test.step(`Выбрать [${indexOption}] опцию в дропдауне`, async () => {
      await this.dropdown.selectOption({ index: indexOption });
    });
  }

  async selectDropdownOptionByLabel(labelOption: string) {
    await test.step(`Выбрать "${labelOption}" опцию в дропдауне`, async () => {
      await this.dropdown.selectOption({ label: labelOption });
    });
  }

  async dropdownOptionShouldBeSelected(indexOption: number) {
    await test.step(`[${indexOption}] опция в дропдауне выбрана`, async () => {
      await expect(this.dropdownOption.nth(indexOption)).toBeSelected();
    });
  }
}
