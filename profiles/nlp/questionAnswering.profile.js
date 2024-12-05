const { run } = require('../../src/categories/nlp/questionAnswering');
const { profile } = require('../../src/utils/profiler');

(async () => {
  const params = {
    context: 'The sky is blue.',
    question: 'What color is the sky?',
  };
  await profile(run, params);
})();
