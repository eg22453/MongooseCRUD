const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set up mongoose connection
let dev_db_url ='mongodb+srv://someuser:abcd1234@productcrudapp-axgmx.mongodb.net/test?retryWrites=true&w=majority';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//end mongoose connection setup



const product = require('./routes/product.route'); //Imports routes for product

//intitialize the express app
const app = express();

app.use('/products', product);
let port =3001

app.listen(port, ()=>{
    console.log('Server is up and running on port number ' + port);
})