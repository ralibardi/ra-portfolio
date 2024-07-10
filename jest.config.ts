import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: false,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./setupTests.ts'],
  testMatch: ['**/*.test.{js,jsx,ts,tsx}'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.scss$': 'jest-transform-css',
    '\\.(svg|png|jpg|jpeg)$': 'jest-transform-stub',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,tsx}',
    '!**/node_modules/**',
    '!**.stories.{js,jsx,tsx}',
  ],
  moduleNameMapper: {
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@routes/(.*)$': '<rootDir>/src/app/routes/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@tests/(.*)$': '<rootDir>/src/tests/$1',
    '^@type/(.*)$': '<rootDir>/src/types/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};

export default config;
