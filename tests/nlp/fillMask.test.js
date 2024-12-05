const { run } = require('../../src/categories/nlp/fillMask');

describe('Fill-Mask Task', () => {
  test('Replaces the mask with a placeholder', async () => {
    const result = await run({ sentence: 'The sky is [MASK].', mask: '[MASK]' });
    expect(result).toBe('The sky is <predicted-word>.');
  });
});
