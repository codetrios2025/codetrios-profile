const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var imporovmentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
   
    description:{
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
module.exports = mongoose.model('Improvment', imporovmentSchema);
