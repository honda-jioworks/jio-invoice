module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },

  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],

  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },

  collectCoverage: true,

  collectCoverageFrom: ['<rootDir>/components/**/*.vue', '<rootDir>/pages/**/*.vue'],

  testEnvironment: 'jsdom',
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',

  transformIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['/node_modules/(?!name-of-lib-o-transform)'],
  transformIgnorePatterns: ['/node_modules/(?!lib-to-transform|other-lib)'],
};
