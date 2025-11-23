const mongoose = require('mongoose'); // Erase if already required
const dataSchema = new mongoose.Schema({
    title: { type: String,},
    subtitle: { type: String,},
    order: { type: Number,  },
    description:{
        type:String,
    },
    pageimage: {
        type: String,
        
    },
});
// Declare the Schema of the Mongo model
var sectorSchema = new mongoose.Schema({
    title: {
        type:String,
        
    },
    subdescription:{ type:String,},
    projecttitle:{ type:String,},
    link:{
        type:String,  
    },
    description: {
        type:String,       
    },
    order:{
        type:Number,
        
    },
    image:{
        type:String,
        required:true,
    },
    fields:[dataSchema],
    innerimage:{ type:String,},
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('Sector', sectorSchema);