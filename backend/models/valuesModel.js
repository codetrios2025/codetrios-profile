const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var valuesSchema = new mongoose.Schema({
    title: {
        type:String,
        
    },
    link:{
        type:String,  
    },
    description: {
        type:String,       
    },
    order:{
        type:Number,
        
    },
    image:{
        type:String,
        
    },
    valueType:{ type:String,},
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('Values', valuesSchema);