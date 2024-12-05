async function benchmark(func, params, iterations = 10) {
    const times = [];
  
    for (let i = 0; i < iterations; i++) {
      const start = process.hrtime.bigint();
      await func(params);
      const end = process.hrtime.bigint();
      times.push(Number(end - start) / 1e6); // Convert nanoseconds to milliseconds
    }
  
    const avgTime = times.reduce((a, b) => a + b, 0) / iterations;
    console.log(`Benchmark completed: Average execution time = ${avgTime.toFixed(2)} ms`);
    return { avgTime, iterations, times };
  }
  
  module.exports = { benchmark };
  