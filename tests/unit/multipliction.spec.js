const multiplication = require('@/util/multiplication');

it('掛け算のてすと', () => {
  const result = multiplication(5, 6);
  expect(result).toBe(30);
});
