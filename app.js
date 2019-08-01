const express = require('express');
const bodyParser = require('body-parser');

//intitialize the express app
const app = express();
let port =3001

app.listen(port, ()=>{
    console.log('Server is up and running on port number ' + port);
})