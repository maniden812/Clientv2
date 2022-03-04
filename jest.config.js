const {defaults} = require('jest-config');
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  "coverageDirectory": "./TestCode/Coverages",
  "coverageReporters": ["clover", "json", "lcov", ["text", {"skipFull": true}]],
  

};