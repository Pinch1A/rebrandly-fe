// var utils = require('ts-jest/utils');

module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**'],
  coverageReporters: ['text', 'lcov'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'dist',
    '/__tests__/',
    '/*.json',
    'next.config.js',
    '/.next/'
  ],
  testPathIgnorePatterns: ['node_modules', 'dist'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
