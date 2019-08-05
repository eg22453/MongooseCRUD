const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

//trying to figure out mongoose connection!!!!1

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@productcrudapp-shard-00-00-axgmx.mongodb.net:27017,productcrudapp-shard-00-01-axgmx.mongodb.net:27017,productcrudapp-shard-00-02-axgmx.mongodb.net:27017/test?ssl=true&replicaSet=ProductCRUDAPP-shard-0&authSource=admin&retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 3001;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});