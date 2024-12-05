exports.run = async (params) => {
    if (!params.sentence || !params.mask) {
      throw new Error("Missing required parameters: 'sentence' and 'mask'.");
    }
    const { sentence, mask } = params;
    return sentence.replace(mask, '<predicted-word>');
  };
  