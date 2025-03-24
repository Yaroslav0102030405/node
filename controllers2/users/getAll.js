const { User } = require('../../models');

const getAll = async (req, res, next) => {
  try {
    const result = await User.find({}, 'name, email, phone, status');
    res.join({ result });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
