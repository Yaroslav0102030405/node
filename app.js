// const productOperations = require('./products');

// (async () => {
//   try {
//     // прочитати все содержимое
//     // const products = await productOperations.getAll();
//     // console.log(products);

//     // прочитати тільки один товар по ид
//     // Знайти товар по ід
//     // const id = '1';
//     // const oneProduct = await productOperations.getById(id);
//     // перезаписати в товарі знайденому по ід ціну
//     // const update = await productOperations.update(id, { price: 2 });
//     // видалити товар
//     // const deleteProduct = await productOperations.del(id);
//     // console.log(deleteProduct);

//     // Додати товар
//     const data = { name: 'iPhone', price: 4 };
//     const newProducts = await productOperations.add(data);
//     console.log(newProducts);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

// перший варіант
// const yargs = require('yargs/yargs');
// const { hideBin } = require('yargs/helpers');
// // const argv = yargs(hideBin(process.argv)).argv;
// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// console.log(argv);
// const action = process.argv.slice(2).indexOf(--action);

// if (action !== -1) {
//   const actionValue = process.argv[action + 1];

// switch (argv.action) {
//   case 'getAll':
//     console.log(products);
//     break;
//   case 'getByid':
//     if (argv.id) {
//       const result = products.find((item) => item.id === id);
//       console.log(result);
//       break;
//     }
//     console.log('Ви не вказали ід');
//     break;

//   default:
//     console.log('action не вказан');
// }
// }

// другий варіант
// const { program } = require('commander');

// const products = require('./products');

// program
//   .option('-a, --action <type>', 'action <type>')
//   .option('-i, --id <type>', 'product id');

// program.parse(process.argv);

// const options = program.opts();
// // console.log(options);

// switch (options.action) {
//   case 'getAll':
//     console.log(products);
//     break;
//   case 'getByid':
//     if (options.id) {
//       const result = products.find((item) => item.id === id);
//       console.log(result);
//       break;
//     }
//     console.log('Ви не вказали ід');
//     break;

//   default:
//     console.log('action не вказан');
// }

// console.log(options);

// const http = require('http');

// const server = http.createServer((request, response) => {
//   const { url } = request;

//   switch (url) {
//     case '/':
//       response.write('Home page');
//       break;
//     case '/contacts':
//       response.write('Contact page');
//       break;
//     default:
//       response.write('Not found ');
//   }

//   response.end();
// });

// server.listen(4000);

// const express = require('express');
// const fs = require('fs/promises');
// // библиотека для установки годин
// const moment = require('moment');

// const app = express();

// // створення мідлвара вона робиться перед запросами мідлвар - промежуточний обработчик
// app.use(async (req, res, next) => {
//   const data = moment().format('DD-MM-YYYY_hh:mm:ss');
//   const { url, method } = req;
//   await fs.appendFile('server.log', `\n${data} ${method} ${url}`);
//   // шукає оброботчика
//   next();
// });

// app.get('/', (req, res) => {
//   res.send('<h2>Home page</h2>');
// });

// app.get('/contacts', (req, res) => {
//   res.send('<h2>Contact page</h2>');
// });

// app.use((_, res) => {
//   res.status(404).send('Not found');
// });

// app.listen(4000);

// приклад 2
// const express = require('express');
// const cors = require('cors');
// const products = require('./products1');
// const app = express();

// // разершаємо робити кросбраузерни запроси
// // обов'язково визиваємо його в мідлваре
// app.use(cors());

// app.get('/api/v1/products', (req, res) => {
//   res.status(201).json({ status: 'success', data: { result: products } });
// });

// app.get('/api/v1/products', (req, res) => {
//   res.json(products);
// });

// app.get('/api/v2/products', (req, res) => {
//   res.json(products.slice(0, 10));
// });

// app.get('/products/:id', (req, res) => {
//   const { id } = req.params;
//   const product = products.find();
// });

// app.listen(4000);

// перед роботою встановлюэмо покаети
//cors, express, nodemon, moment, morgan, uuid

// приклад
// const express = require('express');
// const cors = require('cors');
// // const products = require('./productsData');
// const logger = require('morgan');

// const api = require('./api');

// const app = express();

// app.use(cors());
// const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
// app.use(logger(formatsLogger));

// app.use('/api/v1/products', api.products);

// app.listen(4000);

//
const dotevn = require('dotenv');
dotevn.config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1>');
});

// const { DB_HOST } = require('./secretKey');

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST, {
    // useNewUrlParsel: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connect success');
    app.listen(4000);
  })
  .catch((error) => console.log(error));
