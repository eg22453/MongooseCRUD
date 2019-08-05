const express = require('express');
const router = express.Router();


//require the controllers that will be created
const product_controller=require('../controllers/product.controller');


//a simple test URL to check that all of our filed are communicating properly
router.get('/test', product_controller.test);

//now to make a READ route for this CRUD app
router.get('/:id', product_controller.product_details);


//post route to create something
router.post('/create', product_controller.product_create);

module.exports =router;