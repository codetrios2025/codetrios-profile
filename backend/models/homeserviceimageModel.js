const { text } = require('express');
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var homeserviceimageSchema = new mongoose.Schema({
    text: {
        type:String,
        required:true,
    },
    link:{
        type:String,  
    },
    serviceId: {
        type:String,       
    },
    order:{
        type:Number,
        
    },
    image:{
        type:String,
        required:true,
    },
    innerimage:{
        type:String,
    },
    imageicon:{
        type:String,
    },
    description:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('Homeserviceimage', homeserviceimageSchema);