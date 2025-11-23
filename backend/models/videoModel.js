const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var videoSchema = new mongoose.Schema({
    title: {type:String,},
    pageType:{type:String,  },
    description: { type:String, },
    video:{ type:String, },
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('Video', videoSchema);