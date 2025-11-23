const mongoose = require('mongoose'); // Erase if already required

const fieldSchema = new mongoose.Schema({
    field1: {
        type: String,
        required: true,
    },
    field2: {
        type: String,
        required: true,
    },
});

const WhoWeAreSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
        positive: true,
        integer: true,
    },
    fields: {
        type: [fieldSchema],
        required: true,
    },
});

// Export the model
module.exports = mongoose.model('WhoWeAre', WhoWeAreSchema);
