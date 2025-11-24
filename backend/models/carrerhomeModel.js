const mongoose = require('mongoose'); // Erase if already required

const fileSchema = new mongoose.Schema({
    fileName: {
      type: String,
    },
    filePath: {
      type: String,
    },
  });

// Declare the Schema of the Mongo model
var carrerhomeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    link:{
        type:String,
    },
    
    description:{
        type:String,
    },
    image: [fileSchema],
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
module.exports = mongoose.model('carrerhome', carrerhomeSchema);
