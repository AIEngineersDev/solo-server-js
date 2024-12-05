exports.run = async (params) => {
    if (!params.sentence1 || !params.sentence2) {
      throw new Error("Missing required parameters: 'sentence1' and 'sentence2'.");
    }
    return Math.random().toFixed(2); // Mock similarity score
  };
  