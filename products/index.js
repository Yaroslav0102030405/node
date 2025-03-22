// старий варіант импорту
// const users = require('./users');
// console.log(users);

// const { admin } = require('./users');
// console.log(admin);

// const { clients } = require('./users');
// console.log(clients);

// console.log(users.clients);
// console.log(users.admin);

// новий варіант импорту
// import users from './users.js';
// console.log(users.admin);
// console.log(users.clients);

// Робота з файловою системою
// const fs = require('fs');

// // прочитати файл
// fs.readFile('read.txt', 'utf-8', (error, data) => {
//   if (error) {
//     console.log(error.message);
//     return;
//   }
//   console.log(data);
// });

// const fs = require('fs').promises;

// const readFile = async (fileName) => {
//   try {
//     const data = await fs.readFile(fileName, 'utf-8');
//     const newData = `${data}\nИ ни слова про Эксклера`;
//     await fs.writeFile(fileName, newData);
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// readFile('read.txt');

// const fs = require('fs').promises;
// const readFile2 = async (fileName) => {
//   try {
//     // const data = await fs.readFile(fileName, 'utf-8');
//     const newData2 = `\nОн считает Ницше`;
//     await fs.appendFile(fileName, newData2);
//     // console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// readFile2('read.txt');

// const productsJson = async () => {
//   try {
//     // прочитати все содержимое
//     const products = await productOperations.getAll();
//     console.log(products);

//     // прочитати тільки один товар по ид
//     // const id = '1';
//     // const oneProduct = await productOperations.getById(id);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// productsJson();

const getAll = require('./getAll');
const getById = require('./getById');
const update = require('./update');
const del = require('./del');
const add = require('./add');

module.exports = { getAll, getById, update, del, add };
