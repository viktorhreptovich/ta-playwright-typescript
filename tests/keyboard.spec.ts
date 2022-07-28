import { test } from '@playwright/test';
import { KeyPressPage } from '../pages/key-press.page';
import { KeyboardPage } from '../utils/keyboard';
import { Keys } from '../utils/keys';

test('Клавиатура', async ({ page }) => {
  const keyPressPage = new KeyPressPage(page);
  const keyboard = new KeyboardPage(page);

  await keyPressPage.open();
  await keyPressPage.clickKeyInput();
  await keyboard.type('test');
  await keyPressPage.keyInputShouldHaveText('test');
  await keyPressPage.resultShouldHaveText('You entered: T');

  await keyboard.down(Keys.Shift);
  await keyboard.press(Keys.ArrowLeft);
  await keyboard.press(Keys.ArrowLeft);
  await keyboard.press(Keys.ArrowLeft);
  await keyboard.press(Keys.ArrowLeft);
  await keyboard.press(Keys.Backspace);
  await keyPressPage.keyInputShouldHaveText('');
  await keyPressPage.resultShouldHaveText('You entered: BACK_SPACE');

  await keyboard.pressWithKey(Keys.Shift, 'T');
  await keyboard.pressWithKey(Keys.Shift, 'E');
  await keyboard.pressWithKey(Keys.Shift, 'S');
  await keyboard.pressWithKey(Keys.Shift, 'T');
  await keyPressPage.keyInputShouldHaveText('TEST');
  await keyPressPage.resultShouldHaveText('You entered: T');
});
