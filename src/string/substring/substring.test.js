import substring from './substring';

String.prototype.substring = substring;

test('不传入参数', () => {
  expect('123'.substring()).toBe('123');
});

test('传入1个参数', () => {
  expect('123'.substring(1)).toBe('23');
});

test('传入2个参数', () => {
  expect('123'.substring(0, 2)).toBe('12');
});

test('第1个参数和第2个参数相同', () => {
  expect('123'.substring(2, 2)).toBe('3');
});

test('传入1个非数字参数', () => {
  expect('123'.substring('a')).toBe('123');
});

test('传入2个非数字参数', () => {
  expect('123'.substring('a', 'b')).toBe('123');
});

test('传入1个数字参数和1个非数字参数', () => {
  expect('123'.substring('1', 'b')).toBe('1');
});
