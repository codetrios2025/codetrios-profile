const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model

var headerSchema = new mongoose.Schema({
    linkText:{
        type:String,
        
    },
    shorttitle:{
        type:String,
        },
    linkUrl:{
        type:String,
    },
  
    description:{
        type:String,
     
    },
    orderNumber:{
        type:Number,
       
    },
    image:{
        type:String,
    },
    parentTab:{
        type:String,
    },
    megaMenu:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('Header', headerSchema);