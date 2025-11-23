const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var teamSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    link:{
        type:String,
    },
    position:{
        type:String,
    },
    description:{
        type:String,
    },
    positionType:{ type:String,},
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
module.exports = mongoose.model('Team', teamSchema);
