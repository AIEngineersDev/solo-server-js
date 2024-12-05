const { run } = require('../../src/categories/nlp/sentenceSimilarity');

describe('Sentence Similarity Task', () => {
  test('Returns a mocked similarity score', async () => {
    const result = await run({ sentence1: 'Hello', sentence2: 'Hi' });
    expect(parseFloat(result)).toBeGreaterThanOrEqual(0);
    expect(parseFloat(result)).toBeLessThanOrEqual(1);
  });
});
