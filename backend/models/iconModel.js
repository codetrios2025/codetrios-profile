const mongoose = require('mongoose'); // Erase if already required
// Schema for each language-PDF pair
const fieldSchema = new mongoose.Schema({
    title: { type: String,},
    order: { type: Number,  },
    description:{
        type:String,
    },
    icon: {
        type:String,
    },
  });
  
const IconSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    link:{
        type:String,
    },
   
    fields: {type: [fieldSchema],},
    createdAt:{
        type:Date,
        default:Date.now
    },
    
});



//Export the model
module.exports = mongoose.model('IconService', IconSchema);