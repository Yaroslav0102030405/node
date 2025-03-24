const express = require('express');

const { joiSchema } = require('../../models/user');
const { validation } = require('../../middlewares');
const { users: ctrl } = require('../../controllers2');

const validationFunc = validation(joiSchema);

const router = express.Router();

router.post('/', validationFunc, ctrl.add);

router.get('/', ctrl.getAll);

module.exports = router;
