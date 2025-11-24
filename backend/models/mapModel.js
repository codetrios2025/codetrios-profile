const mongoose = require('mongoose'); // Erase if already required

const mapSchema = new mongoose.Schema({
    title: {
        type:String,
        
    },
   
    description: {
        type:String,       
    },
    latitude:{
        type:String,       
    },
    longitude:{
        type:String,       
    },
});



//Export the model
module.exports = mongoose.model('Map', mapSchema);