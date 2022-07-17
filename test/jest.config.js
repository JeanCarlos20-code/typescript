const { resolve } = require('path');
const root = resolve(__dirname, '..');
const rootConfig = require(`${root}/jest.config.js`); //root config importa a globa e sobreescrever algumas chaves

module.exports = {...rootConfig, ...{
  rootDir: root,
  displayName: "end2end-tests",
  setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"], //roda o setup antes da global
  testMatch: ["<rootDir>/test/**/*.test.ts"], //apenas arquivos dentro da pasta teste
}}