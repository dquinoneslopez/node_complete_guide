const path = require('path');

const expres = require('express');

const router = expres.Router();

const shopController = require('../controllers/shop');

// / => GET
router.get('/', shopController.getIndex);

// /products => GET
router.get('/products', shopController.getProducts);

// /cart => GET
router.get('/cart', shopController.getCart);

// /orders => GET
router.get('/orders', shopController.getOrders);

// /checkout => GET
router.get('/checkout', shopController.getCheckout);

module.exports = router;