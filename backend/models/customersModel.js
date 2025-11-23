const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var customersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    link:{type:String,},
  
    description:{type:String,},
    pageType:{type:String,},
    image:{type:String,required:true,},
    order:{type:Number,},
   
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('Customers', customersSchema);
