const Product = require('../models/product');

const path = require('path');
const rootDir = require('../util/path');


const postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/')
}

const getAddpProduct = (req, res, next) => {
    Product.fetchAll((products) => {
        console.log(products)
    });

    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
}


module.exports = {
    getAddpProduct,
    postAddProduct,
};