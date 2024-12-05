const { run } = require('../../src/categories/toy/helloWorld');
const { profile } = require('../../src/utils/profiler');

(async () => {
  const params = { name: 'Profiler' };

  try {
    const results = await profile(run, params);
    console.log('Hello World Profiler Results:', results);
  } catch (error) {
    console.error('Profiling failed:', error.message);
  }
})();
