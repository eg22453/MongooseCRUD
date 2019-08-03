const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); //Imports routes for product

//intitialize the express app
const app = express();

app.use('/products', product);
let port =3001

app.listen(port, ()=>{
    console.log('Server is up and running on port number ' + port);
})