async function benchmark(func, params, iterations = 10) {
    const times = [];
    for (let i = 0; i < iterations; i++) {
      const start = process.hrtime.bigint();
      await func(params);
      const end = process.hrtime.bigint();
      times.push(Number(end - start) / 1e6);
    }
    console.log(`Benchmark completed: Avg time = ${times.reduce((a, b) => a + b) / iterations} ms`);
  }
  module.exports = { benchmark };
  