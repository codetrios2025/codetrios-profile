const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var missionSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    link:{
        type:String,  
    },
    description: {
        type:String,  
        required:true,     
    },
    order:{
        type:Number,
        
    },
    backgroundimage:{
        type:String,
        
    },
    icon:{  type:String,},
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('Mission', missionSchema);