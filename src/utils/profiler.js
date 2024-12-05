async function profile(func, params) {
    const start = process.hrtime();
    const memoryStart = process.memoryUsage();
    await func(params);
    const memoryEnd = process.memoryUsage();
    const timeEnd = process.hrtime(start);
    console.log('Profiler Results:', {
      memoryUsed: memoryEnd.heapUsed - memoryStart.heapUsed,
      timeTaken: `${timeEnd[0]}s ${timeEnd[1] / 1e6}ms`,
    });
  }
  module.exports = { profile };
  