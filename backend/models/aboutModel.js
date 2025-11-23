const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var aboutSchema = new mongoose.Schema({
    title: {
        type:String,  
    },
    link:{
        type:String,  
    },
    description: {
        type:String,       
    },
    description1: {
        type:String,       
    },
    order:{
        type:Number, 
    },
    image1:{
        type:String,
      },
    image2:{ type:String,},
    image3:{ type:String,},
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('About', aboutSchema);