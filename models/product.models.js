const mongoose = require('mongoose');
const schema = mongoose.Schema;

//instantiate the table model
let ProductSchema =new Schema ({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});


//export the module, this is not ES6 syntax as far as I know
//exporting will let the model model be used by other files in our project
module.exports = mongoose.model('Product', ProductSchema);
