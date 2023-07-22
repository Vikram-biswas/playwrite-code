const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { expect, test } = require('@playwright/test');
const LoginPage = require('../../utils/pageObject');
var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60000);
let page;
let loginPage;
let browser;

Given('user launch the application', async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  await context.setDefaultNavigationTimeout(60000);
  page = await context.newPage();
  loginPage = new LoginPage(page);
  loginPage.launchPage();
  await page.waitForLoadState('networkidle')
});

When('user enters the {string} and {string}', async function (userName, password) {
  await loginPage.getSignInLink();
  await page.waitForLoadState('networkidle');
  await loginPage.getSignInLink();
  setTimeout(() => {}, 10000);
  await page.waitForLoadState('networkidle')
  await loginPage.getUserName(userName);
  setTimeout(() => {}, 2000);
  await loginPage.getPassword(password);
  setTimeout(() => {}, 10000);
  await page.waitForLoadState('networkidle')
  await expect(page.locator("(//button[contains(text(),'Sign In')])[2]")).toBeEditable();
  await page.locator("(//button[contains(text(),'Sign In')])[2]").dblclick();
});

Then('validate the error {string} displayed', async function (errorMessage) {
  console.log(await page.locator("//span[@class='mat-simple-snack-bar-content']").textContent());
});