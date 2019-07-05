const path = require('path');

const rootDir = require('../utils/path');

const expres = require('express');

const router = expres.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    console.log('shop.j: ', adminData.products);
    const products = adminData.products;
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', {
        prods: products,
        docTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;