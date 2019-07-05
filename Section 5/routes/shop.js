const path = require('path');

const rootDir = require('../utils/path');

const expres = require('express');

const router = expres.Router();

router.get('/', (req, res, next) => {
    console.log('In the middleware"!');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;