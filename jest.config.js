export default {
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.js'],
  transform: {},
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
};
