const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    chromeWebSecurity: false,
    video: true,
    screenshotOnRunFailure: true,
  },
});
