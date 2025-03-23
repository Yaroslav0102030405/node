const express = require('express');

const { products: ctrl } = require('../controllers');
// const { products } = require('../controllers');
console.log(ctrl);
const router = express.Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
// router.post('/', ctrl.add);
// router.put('/:id', ctrl.update);
// router.delete('/:id', ctrl.remove);

module.exports = router;
