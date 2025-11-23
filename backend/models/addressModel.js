const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var addressSchema = new mongoose.Schema({
    title:{
        type:String,
       
    },
    page:{
        type:String,
        required:true,
    },
    order:{
        type:Number,
    },
    city:{
        type:String,
       
    },
    addressName:{
        type:String,
        required:true,
    },
   
    email:{
        type:String,
    },
    phoneNumber:{
        type:String,
        default: 0,
    },
    status:{
        type:Number,
        default: 1,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('Address', addressSchema);