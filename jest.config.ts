import type { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>/src'],
  coverageProvider: 'v8',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}

export default config
