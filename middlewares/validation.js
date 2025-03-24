const validation = (schema) => {
  const validFunc = (req, rex, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return req.status(400).json({ message: error.message });
    }
    next();
  };
  return validFunc;
};

module.exports = validation;
