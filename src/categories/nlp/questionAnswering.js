exports.run = async (params) => {
    if (!params.context || !params.question) {
      throw new Error("Missing required parameters: 'context' and 'question'.");
    }
    return `Answer for "${params.question}" from context.`;
  };
  