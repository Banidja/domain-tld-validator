/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
      '^.+\\.tsx?$': 'ts-jest', 
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'], 
  testMatch: ['**/test/**/*.test.ts'],
  globals: {
      'ts-jest': {
          tsconfig: 'tsconfig.json', 
      },
  },
};
