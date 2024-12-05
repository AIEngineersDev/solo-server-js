const path = require('path');

async function loadCategoryModule(category, model, params) {
  try {
    const modulePath = path.resolve(__dirname, `../categories/${category}/${model}.js`);
    const module = require(modulePath);

    if (typeof module.run !== 'function') {
      throw new Error(`Module for ${category}/${model} does not export a 'run' function.`);
    }

    return await module.run(params);
  } catch (error) {
    throw new Error(`Failed to load module for ${category}/${model}: ${error.message}`);
  }
}

module.exports = { loadCategoryModule };
