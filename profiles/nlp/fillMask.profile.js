const { run } = require('../../src/categories/nlp/fillMask');
const { profile } = require('../../src/utils/profiler');

(async () => {
  const params = { sentence: 'The sky is [MASK].', mask: '[MASK]' };
  await profile(run, params);
})();
