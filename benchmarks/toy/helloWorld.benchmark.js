const { run } = require('../../src/categories/toy/helloWorld');
const { benchmark } = require('../../src/utils/benchmarker');

(async () => {
  const params = { name: 'Benchmark' };
  const iterations = 10;

  try {
    const results = await benchmark(run, params, iterations);
    console.log('Hello World Benchmark Results:', results);
  } catch (error) {
    console.error('Benchmark failed:', error.message);
  }
})();
