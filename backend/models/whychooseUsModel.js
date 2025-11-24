const mongoose = require('mongoose'); // Erase if already required
const imageSchema = new mongoose.Schema({
    fileName: {
      type: String
    },
    filePath: {
      type: String
    },
  });

// Schema for each language-PDF pair
const fieldSchema = new mongoose.Schema({
    title: { type: String,},
    link: { type: String,  },
    description: { type: String,  },
    description2: { type: String,  },
    order: { type: Number,  },
    image: { type: [imageSchema], } // Assuming you store image paths or URLs
  });
  


// Declare the Schema of the Mongo model
var whychooseUsSchema = new mongoose.Schema({
    titlename: { type: String,unique: true   },
    subtitle:{type: String,},
    link: { type: String,  },
    image:{type:String,},
    description: { type: String, },
    fields: {type: [fieldSchema],},
    createdAt:{
        type:Date,
        default:Date.now
    },
});

//Export the model
module.exports = mongoose.model('WhyChooseUs', whychooseUsSchema);
