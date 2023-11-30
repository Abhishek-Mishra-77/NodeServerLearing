const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')


const getProductFromFile = (callback) => {
    fs.readFile(p, (error, fileContent) => {
        if (error) {
            callback([]);
        }
        callback(JSON.parse(fileContent));
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (error) => {
                console.log(error);
            })
        })
    }

    static fetchAll(callback) {
        getProductFromFile(callback);
    }
}