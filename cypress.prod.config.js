const { defineConfig } = require('cypress');
const defaultConfig = require('./cypress.config.js');
const { defu } = require('defu');

module.exports = defineConfig(
  defu(
    {
      e2e: {
        baseUrl: 'https://www.pecodesoftware.com',
      },
    },
    defaultConfig
  )
);
