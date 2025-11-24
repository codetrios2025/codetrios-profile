const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var socialSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    url:{
        type:String,
    },
  
    image:{
        type:String,
        required:true,
    },
    order:{
        type:Number,
        default: 0,
    },
   
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('Social', socialSchema);