const express = require('express');
const router = express.Router();
const contactusController = require('../controllers/contactusController');


router.get('/contactus', contactusController)

router.post('/contactus', (req, res, next) => {
    res.redirect('/success')
})


module.exports = router;