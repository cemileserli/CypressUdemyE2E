import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'vwg8zj',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: [
      './cypress/e2e/1-getting-started/*',
      './cypress/e2e/2-advanced-examples/*',
    ],
  },
  
});
