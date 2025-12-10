const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var homeserviceSchema = new mongoose.Schema({
    title: {
        type:String,
        
    },
   
    description: {
        type:String,       
    },
    order:{
        type:Number,
        
    },
    iconfield:{
       type:String,   
    },
   link:{
    type:String, 
   },
   image:{
    type:String, 
   },
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('Homeservice', homeserviceSchema);