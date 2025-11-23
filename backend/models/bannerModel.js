const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var bannerSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    link:{
        type:String,
    },
    bannerText:{
        type:String,
    },
    bannerImage:{
        type:String,
        required:true,
    },
    bannerOrder:{
        type:Number,
        default: 0,
    },
    bannerStatus:{
        type:Number,
        default: 1,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('Banner', bannerSchema);