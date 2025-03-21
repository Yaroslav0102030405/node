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
import users from './users.js';
console.log(users.admin);
console.log(users.clients);
