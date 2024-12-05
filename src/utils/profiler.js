function profile(func, params) {
    const startMemory = process.memoryUsage();
    const startTime = process.hrtime();
  
    return func(params)
      .then(() => {
        const endMemory = process.memoryUsage();
        const endTime = process.hrtime(startTime);
  
        const memoryUsage = {
          rss: (endMemory.rss - startMemory.rss) / 1024 / 1024, // Memory in MB
          heapUsed: (endMemory.heapUsed - startMemory.heapUsed) / 1024 / 1024,
        };
  
        const cpuTime = (endTime[0] * 1e3 + endTime[1] / 1e6).toFixed(2); // CPU time in ms
        console.log('Profiler Results:', { memoryUsage, cpuTime });
        return { memoryUsage, cpuTime };
      })
      .catch((error) => {
        throw new Error(`Profiling failed: ${error.message}`);
      });
  }
  
  module.exports = { profile };
  