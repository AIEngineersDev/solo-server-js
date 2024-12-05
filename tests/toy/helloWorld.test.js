const { run } = require('../src/categories/toy/helloWorld');

describe('Hello World Model', () => {
  test('Returns default greeting', async () => {
    const result = await run({});
    expect(result).toBe('Hello, World!');
  });

  test('Returns personalized greeting', async () => {
    const result = await run({ name: 'Solo' });
    expect(result).toBe('Hello, Solo!');
  });
});
