const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var blogsSchema = new mongoose.Schema({
    title: {  type:String,   },
    author: {type:String,},
    authorpost: {type:String,},
    link:{type:String,},
    description: {type:String,},
    description1: {type:String,  },
    order:{type:Number, },
    image:{type:String,},
    blogdate:{ type:Date, },
    createdAt:{type:Date,default:Date.now },
});

//Export the model
module.exports = mongoose.model('Blog', blogsSchema);