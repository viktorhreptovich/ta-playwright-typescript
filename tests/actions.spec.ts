import { expect, test } from '@playwright/test';
import { ForgotPasswordPage } from '../pages/forgot-password.page';
import { AddRemoveElementsPage } from '../pages/add-remove-elements.page';
import { DropdownPage } from '../pages/dropdown.page';
import { CheckboxesPage } from '../pages/checkboxes.page';
import { IframePage } from '../pages/iframe.page';
import { Dialog } from '../pages/dialog';
import { AlertsPage } from '../pages/alerts.page';

test('Ввод текста', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);

  await forgotPasswordPage.open();
  await forgotPasswordPage.typeEmailInput('test');
  await forgotPasswordPage.emailInputShouldHaveText('test');
});

test('Нажатие кнопок', async ({ page }) => {
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

test('Выпадающий список', async ({ page }) => {
  const dropdownPage = new DropdownPage(page);

  await dropdownPage.open();
  await dropdownPage.selectDropdownOptionByIndex(1);
  await dropdownPage.dropdownOptionShouldBeSelected(1);
});

test('Выбор чекбоксов', async ({ page }) => {
  const checkboxesPage = new CheckboxesPage(page);

  await checkboxesPage.open();
  await checkboxesPage.checkboxShouldBeUnchecked(0);
  await checkboxesPage.checkboxShouldBeChecked(1);

  await checkboxesPage.uncheckCheckbox(1);
  await checkboxesPage.checkboxShouldBeUnchecked(1);

  await checkboxesPage.checkCheckbox(0);
  await checkboxesPage.checkboxShouldBeChecked(0);
});

test('iFrame', async ({ page }) => {
  const iFramePage = new IframePage(page);

  await iFramePage.open();
  await iFramePage.tinyMCEShouldHaveText('Your content goes here.');

  await iFramePage.typeTinyMCE('Test text. ');
  await iFramePage.tinyMCEShouldHaveText('Test text. Your content goes here.');
});

test('Диалоговые окна (alert, confirm, prompt)', async ({ page }) => {
  const alertsPage = new AlertsPage(page);
  const dialog = new Dialog(page);

  await alertsPage.open();

  await dialog.waitAndAcceptAlert('I am a JS Alert');
  await alertsPage.clickAlertButton();
  await alertsPage.resultShouldHaveText('You successfully clicked an alert');

  await dialog.waitAndAcceptConfirm('I am a JS Confirm');
  await alertsPage.clickConfirmButton();
  await alertsPage.resultShouldHaveText('You clicked: Ok');

  await dialog.waitAndDismissConfirm('I am a JS Confirm');
  await alertsPage.clickConfirmButton();
  await alertsPage.resultShouldHaveText('You clicked: Cancel');

  await dialog.waitAndAcceptPrompt('I am a JS prompt', 'test');
  await alertsPage.clickPromptButton();
  await alertsPage.resultShouldHaveText('You entered: test');

  await dialog.waitAndDismissPrompt('I am a JS prompt');
  await alertsPage.clickPromptButton();
  await alertsPage.resultShouldHaveText('You entered: null');
});
