const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var contactusSchema = new mongoose.Schema({
    title:{
        type:String,
       
    },
    organization:{
        type:String,
       
    },   
    email:{
        type:String,
    },
    phoneNumber:{
        type:Number,
       
    },
    query:{
        type:String,
       
    },
    city:{
        type:String,
       
    },
    message:{
        type:String,
       
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('ContactUs', contactusSchema);