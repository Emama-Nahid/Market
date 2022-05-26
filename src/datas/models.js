const mongoose = require('mongoose');
//const { stringify } = require('querystring');

var schema = new mongoose.Schema({
    productname : {
        type : String,
        required: true
    },
    price : {
        type: String,
        required: true,
        unique: true
    },
    amount : String,
    IsBestAchive : String,
    
})

const Products= mongoose.model('products', schema);

module.exports = Products ;