const express = require('express');
const router = express.Router();


//require the controllers that will be created
const product_controller=require('../controllers/product.controller');


//a simple test URL to check that all of our filed are communicating properly
router.get('/test', product_controller.test);

module.exports =router;