'use strict';

const { configs } = require('@nullvoxpopuli/eslint-configs');
const { baseConfig: baseNode } = require('@nullvoxpopuli/eslint-configs/configs/node');

const config = configs.ember();

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,
    {
      ...baseNode,
      files: ['browserstack.testem.js'],
    },
    {
      files: ['**/*.{gts,gjs'],
      rules: {},
    },
    {
      files: ['tests/**/*.ts'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
    {
      files: ['types/**/*'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
