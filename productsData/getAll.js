const fs = require('fs/promises');
const path = require('path');

const filePath = require('./filePath');

const getAll = async () => {
  try {
    const data = await fs.readFile(filePath);
    const products = JSON.parse(data);
    return products;
    // console.log(products);
  } catch (error) {
    throw error;
  }
};

module.exports = getAll;
