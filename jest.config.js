const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
  rootDir: root, //diretório raiz do arquivo
  displayName: 'root-tests', //roda os testes caso tiver usando esse arquivo
  testMatch: ['<rootDir>/src/**/*.test.ts'], //teste dentro da pasta source
  testEnvironment: 'node', //variáveis node
  clearMocks: true, //limpar Mocks
  preset: 'ts-jest', //liga o jest com ts-jest
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
};