const { defineConfig } = require("cypress");

module.exports = defineConfig(
  {
    reporter: 'junit',
    reporter: 'cypress-mochawesome-reporter',
    e2e: {
      setupNodeEvents(on, config) {
        // require('cypress-mochawesome-reporter/plugin')(on);
        require('@cypress/grep/src/plugin')(config);
        return config;
      },
      reporterOptions: {
        mochaFile: 'results/my-test-output.xml',
        toConsole: true,
      },
    }
  });
