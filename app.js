const http = require('http');
const bodyParser = require('body-parser')
const path = require('path');

const express = require('express');
const app = express();

const errorController = require('./controllers/404Controller')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
const contactusRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);
app.use(successRoutes);
app.use(errorController)

app.listen(3000)