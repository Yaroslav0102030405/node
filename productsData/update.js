const getAll = require('./getAll');
// const filePath = require('./filePath');
const updateProduct = require('./updateProducts');

const update = async (id, updatePrice) => {
  try {
    const products = await getAll();
    const idx = products.findIndex((item) => item.id === id);
    if (idx === -1) {
      throw new Error(`Product with id=${id} not found`);
    }
    products[idx] = { ...products[idx], ...updatePrice };
    // const productsString = JSON.stringify(products);
    // await fs.writeFile(filePath, productsString);
    await updateProduct(products);
    return products[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = update;
