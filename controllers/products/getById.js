const data = require('../../productsData');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await data.getById(id);
    res.json({ status: 'success', code: 200, data: { result: products } });
  } catch (error) {}
};

module.exports = getById;
