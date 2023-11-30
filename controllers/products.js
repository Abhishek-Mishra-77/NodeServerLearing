const path = require('path');
const rootDir = require('../util/path');

const productController = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
}

module.exports = productController