const mongoose = require('mongoose'); // Erase if already required


const keyheadingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
   
    description: {
        type: String,
        required: true,
    },
   
    
});

// Export the model
module.exports = mongoose.model('Keyheading', keyheadingSchema);
