import type { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>/src'],
  coverageProvider: 'v8',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}

export default config
