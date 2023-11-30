const path = require('path')

const shopController = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
}


module.exports = shopController;
