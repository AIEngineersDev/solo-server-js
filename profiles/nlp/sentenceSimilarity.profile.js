const { run } = require('../../src/categories/nlp/sentenceSimilarity');
const { profile } = require('../../src/utils/profiler');

(async () => {
  const params = { sentence1: 'Hello', sentence2: 'Hi' };
  await profile(run, params);
})();
