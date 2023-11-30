const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

//  /admin/add-product  -> GET Requests
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})

//  /admin/add-product  -> POST Requests
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;
