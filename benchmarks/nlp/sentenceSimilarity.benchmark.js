const { run } = require('../../src/categories/nlp/sentenceSimilarity');
const { benchmark } = require('../../src/utils/benchmarker');

(async () => {
  const params = { sentence1: 'Hello', sentence2: 'Hi' };
  await benchmark(run, params, 10);
})();
