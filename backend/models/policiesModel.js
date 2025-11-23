const mongoose = require('mongoose');

// Schema for each language-PDF pair
const fieldSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true,
    },
    pdf: {
        type: String,
        required: true,
    },
});

// Main schema for policies
const policiesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Ensure title is mandatory
    },
    link: {
        type: String,
       
    },
    description: {
        type: String,
      
    },
    order: {
        type: Number,
       
    },
    policydate: {
        type: Date,
       
    },
    fields: {
        type: [fieldSchema],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

// Export the model
module.exports = mongoose.model('Policies', policiesSchema);
