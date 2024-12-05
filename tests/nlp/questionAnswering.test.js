const { run } = require('../../src/categories/nlp/questionAnswering');

describe('Question Answering Task', () => {
  test('Returns a mocked answer for a question', async () => {
    const result = await run({
      context: 'The sky is blue.',
      question: 'What color is the sky?',
    });
    expect(result).toBe('Answer for "What color is the sky?" from context.');
  });
});
