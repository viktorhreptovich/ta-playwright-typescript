import { Locator } from '@playwright/test';

export async function toBeSelected(locator: Locator) {
  const attributeSelected = await locator.getAttribute('selected');
  const selected = attributeSelected === 'selected';
  return {
    message: () => ((selected) ? `Element: ${locator} is selected` : `Element: ${locator} isn't selected`),
    pass: selected,
  };
}
