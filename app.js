const http = require('http');
const bodyParser = require('body-parser')

const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" placeholder="Enter title" name="title"/> <input type="number" placeholder="Enter size" name="number"/> <button type="submit">Add Product </button></form>')
})

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello mere golu </h1>');
})



app.listen(3000)