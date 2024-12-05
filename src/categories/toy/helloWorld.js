exports.run = async (params) => {
  return `Hello, ${params.name || 'World'}!`;
};
