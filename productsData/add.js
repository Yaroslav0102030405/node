const { v4: uuidv4 } = require('uuid');

const getAll = require('./getAll');
const updateProducts = require('./updateProducts');

const add = async (data) => {
  try {
    const newProducts = { ...data, id: uuidv4() };
    // console.log(newProducts);
    const products = await getAll();
    const newProducts2 = [...products, newProducts];
    await updateProducts(newProducts2);
    return newProducts2;
  } catch (error) {
    throw error;
  }
};

module.exports = add;
