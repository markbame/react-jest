const sum = require('./another-function');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('on non numerical input', () => {
 expect(sum('a', 'b')).toBe('ab')
})


