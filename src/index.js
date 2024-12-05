const express = require('express');
const { loadCategoryModule } = require('./utils/runner');
const { benchmark } = require('./utils/benchmarker');
const { profile } = require('./utils/profiler');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Run a specific model
app.post('/run/:category/:model', async (req, res) => {
  const { category, model } = req.params;
  const params = req.body;

  try {
    const result = await loadCategoryModule(category, model, params);
    res.status(200).json({ success: true, result });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Benchmark a model
app.post('/benchmark/:category/:model', async (req, res) => {
  const { category, model } = req.params;
  const params = req.body;

  try {
    const module = await loadCategoryModule(category, model);
    const results = await benchmark(module.run, params, 10); // 10 iterations
    res.status(200).json({ success: true, results });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Profile a model
app.post('/profile/:category/:model', async (req, res) => {
  const { category, model } = req.params;
  const params = req.body;

  try {
    const module = await loadCategoryModule(category, model);
    const results = await profile(module.run, params);
    res.status(200).json({ success: true, results });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  logger.info(`Solo Server running on http://localhost:${PORT}`);
});
