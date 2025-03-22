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
const { program } = require('commander');

const products = require('./products');

program
  .option('-a, --action <type>', 'action <type>')
  .option('-i, --id <type>', 'product id');

program.parse(process.argv);

const options = program.opts();
// console.log(options);

switch (options.action) {
  case 'getAll':
    console.log(products);
    break;
  case 'getByid':
    if (argv.id) {
      const result = products.find((item) => item.id === id);
      console.log(result);
      break;
    }
    console.log('Ви не вказали ід');
    break;

  default:
    console.log('action не вказан');
}

console.log(options);
