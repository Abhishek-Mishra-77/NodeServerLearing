const express = require('express');

const router = express.Router();

//  /admin/add-product  -> GET Requests
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" placeholder="Enter title" name="title"/> <input type="number" placeholder="Enter size" name="number"/> <button type="submit">Add Product </button></form>')
})

//  /admin/add-product  -> POST Requests
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;
