import healthStatus from '../game';

test('Is healthy', () => {
  const character = { name: 'Маг', health: 90 };

  expect(healthStatus(character)).toBe('healthy');
});

test('Is wounded', () => {
  const character = { name: 'Маг', health: 25 };

  expect(healthStatus(character)).toBe('wounded');
});

test('Is critical', () => {
  const character = { name: 'Маг', health: 5 };

  expect(healthStatus(character)).toBe('critical');
});
