const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
let fooddownloadTypeSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
  order:{ type:String,},
  pageType: {type: String,},
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('FoodDownloadType', fooddownloadTypeSchema);