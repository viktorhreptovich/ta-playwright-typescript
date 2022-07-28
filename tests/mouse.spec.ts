import { test } from '@playwright/test';
import { MousePage } from '../utils/mouse';
import { DragAndDropPage } from '../pages/drag-and-drop.page';

test.use({});

test('Мышь', async ({ page }) => {

  const dragAndDropPage = new DragAndDropPage(page);
  const mouse = new MousePage(page);

  await dragAndDropPage.open();
  const position1 = await dragAndDropPage.getLocationSquire(0);
  const position2 = await dragAndDropPage.getLocationSquire(1);
  await mouse.move(position1);
  await mouse.down();
  await mouse.move(position2);
  await mouse.up();
  await dragAndDropPage.squareShouldHaveHeader(0, 'B');
  await dragAndDropPage.squareShouldHaveHeader(1, 'A');
});
