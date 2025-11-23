const mongoose = require('mongoose'); // Erase if already required

const WhoWeOfferMainSchema = new mongoose.Schema({
    title: {
        type:String,
        
    },
   
    description: {
        type:String,       
    },
    
});



//Export the model
module.exports = mongoose.model('WhoWeOfferMain', WhoWeOfferMainSchema);