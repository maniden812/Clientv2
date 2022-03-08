// const {defaults} = require('jest-config');
// module.exports = {
//   // ...
//   moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],

//   "collectCoverage": true,
//   "collectCoverageFrom": [
//     "**/*.{js,jsx}",
//     "!**/node_modules/**",
//     "!**/vendor/**"
//   ],
//   "coverageDirectory": "./TestCode/Coverages",
//   "coverageReporters": ["clover", "json", "lcov", ["text", {"skipFull": true}]],


// };
module.exports = {
    transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
    transform: {
        '^.+\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    // ...the rest of your config
}