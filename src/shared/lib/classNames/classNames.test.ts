import { classNames } from './classNames';

describe('classNames', () => {
  test('One arg', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('Full args', () => {
    const expected = 'someClass condition condition2 test1 test2';
    expect(classNames('someClass', { condition: true, condition2: true }, ['test1', 'test2'])).toBe(
      expected
    );
  });

  test('Full args with undefined', () => {
    const expected = 'someClass condition test1 test2';
    expect(
      classNames('someClass', { condition: true, condition2: undefined }, ['test1', 'test2'])
    ).toBe(expected);
  });

  test('Full args with false', () => {
    const expected = 'someClass condition test1 test2';
    expect(
      classNames('someClass', { condition: true, condition2: false }, ['test1', 'test2'])
    ).toBe(expected);
  });
});
