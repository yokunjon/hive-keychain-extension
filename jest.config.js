/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  setupFiles: ['dotenv/config'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '.',
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@popup(.*)$': '<rootDir>/src/popup/$1',
    '^@background(.*)$': '<rootDir>/src/background/$1',
    '^@interfaces(.*)$': '<rootDir>/src/interfaces/$1',
    '^@reference-data(.*)$': '<rootDir>/src/reference-data/$1',
    '^@api(.*)$': '<rootDir>/src/api/$1',
  },
  modulePaths: ['<rootDir>'],
  collectCoverageFrom: ['<rootDir>/**/*.{ts, tsx}'],
  collectCoverage: false,
  modulePathIgnorePatterns: ['<rootDir>/src/__tests__/utils-for-testing/'],
  //until here
  //working configuration until here
};