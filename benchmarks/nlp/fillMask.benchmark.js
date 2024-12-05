const { run } = require('../../src/categories/nlp/fillMask');
const { benchmark } = require('../../src/utils/benchmarker');

(async () => {
  const params = { sentence: 'The sky is [MASK].', mask: '[MASK]' };
  await benchmark(run, params, 10);
})();
