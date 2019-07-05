const path = require('path');

const expres = require('express');

const router = expres.Router();

const shopController = require('../controllers/shop');

// / => GET
router.get('/', shopController.getIndex);

// /products => GET
router.get('/products', shopController.getProducts);

// /products/:productId
router.get('/products/:productId', shopController.getProduct);

// /cart => GET
router.get('/cart', shopController.getCart);

// /cart => POST
router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

// /orders => GET
router.get('/orders', shopController.getOrders);

// /checkout => GET
router.get('/checkout', shopController.getCheckout);

module.exports = router;