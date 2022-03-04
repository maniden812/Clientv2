const pricingmodule = require('../pages/api/pricingmodule');
// const sum = require('./pricingmodule');

test('adds 1 + 2 to equal 3', () => {
  expect(pricingmodule(1, 2)).toBe(3);
});