const path = require('path');

const expres = require('express');

const router = expres.Router();

const productsController = require('../controllers/products');


router.get('/', productsController.getProducts);

module.exports = router;