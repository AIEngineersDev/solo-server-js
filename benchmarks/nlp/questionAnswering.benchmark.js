const { run } = require('../../src/categories/nlp/questionAnswering');
const { benchmark } = require('../../src/utils/benchmarker');

(async () => {
  const params = {
    context: 'The sky is blue.',
    question: 'What color is the sky?',
  };
  await benchmark(run, params, 10);
})();
