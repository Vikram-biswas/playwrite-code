// @ts-check
const { defineConfig, devices } = require('@playwright/test');



/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './features/stepDefinition',
  timeout: 5 * 60 * 1000,

});

