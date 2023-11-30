
const path = require('path');

const errorController = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
}

module.exports = errorController;

