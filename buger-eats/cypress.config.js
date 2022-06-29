const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nyxjv2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
