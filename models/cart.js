const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
)


module.exports = class Cart {

    static addProduct(id, productPrice) {
        //Fetch the previous cart
        fs.readFile(p, (error, fileContent) => {
            let cart = { products: [], totalPrice: 0 }
            if (!error) {
                cart = JSON.parse(fileContent)
            }
            //Analyze the cart => Find the existing product
            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = cart.products[existingProductIndex]
            //Add new product / increase quantity
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }
            else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + productPrice
            fs.writeFile(p, JSON.stringify(cart), (error) => {
                console.log(error);
            })
        })
    }
    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return;
            }
            const updatedCart = { ...JSON.parse(fileContent) };
            const product = updatedCart.products.find(prod => prod.id === id);
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id)

            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;

            fs.writeFile(p, JSON.stringify(updatedCart), error => {
                console.log(error);
            })
        })
    }
}