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

const fs = require('fs').promises;

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

const readFile2 = async (fileName) => {
  try {
    // const data = await fs.readFile(fileName, 'utf-8');
    const newData2 = `\nОн считает Ницше`;
    await fs.appendFile(fileName, newData2);
    // console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

readFile2('read.txt');
