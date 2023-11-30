const express = require('express');
const router = express.Router();

const productController = require('../controllers/products')

//  /admin/add-product  -> GET Requests

router.get('/add-product', productController)

//  /admin/add-product  -> POST Requests
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;
