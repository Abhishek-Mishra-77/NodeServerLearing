const express = require('express');

const router = express.Router();

router.get('/shop-product', (req, res, next) => {
    res.send('<h1>This the shop page</h1>');
})

module.exports = router;