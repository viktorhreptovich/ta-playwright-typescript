import { test } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/add-remove-elements.page';

test.use(
  {
    video: 'on',
  },
);

test('Нажатие кнопок (c видео)', async ({ page }) => {
  const addRemoveElementsPage = new AddRemoveElementsPage(page);

  await addRemoveElementsPage.open();
  await addRemoveElementsPage.countOfDeleteButtonShouldBeEqual(0);
  await addRemoveElementsPage.clickAddElementButton();
  await addRemoveElementsPage.countOfDeleteButtonShouldBeEqual(1);
  await addRemoveElementsPage.clickAddElementButton();
  await addRemoveElementsPage.countOfDeleteButtonShouldBeEqual(2);
  await addRemoveElementsPage.clickDeleteButton(0);
  await addRemoveElementsPage.countOfDeleteButtonShouldBeEqual(1);
  await addRemoveElementsPage.clickDeleteButton(0);
  await addRemoveElementsPage.countOfDeleteButtonShouldBeEqual(0);
});
