const getAll = require('./getAll');
const updateProducts = require('./updateProducts');

const del = async (id) => {
  try {
    const products = await getAll();
    const idx = products.findIndex((item) => item.id === id);
    if (idx === -1) {
      throw new Error(`Product with id=${id} not found`);
    }
    const newProducts = products.filter((item) => item.id !== id);
    // const delProduct = products.slice(idx, 1);
    await updateProducts(products);
    return products[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = del;
