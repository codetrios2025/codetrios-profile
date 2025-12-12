const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
// var contactusSchema = new mongoose.Schema({
//     title:{
//         type:String,

//     },
//     organization:{
//         type:String,

//     },
//     email:{
//         type:String,
//     },
//     phoneNumber:{
//         type:Number,

//     },
//     query:{
//         type:String,

//     },
//     city:{
//         type:String,

//     },
//     message:{
//         type:String,

//     },
//     createdAt:{
//         type:Date,
//         default:Date.now
//     },
// });

// //Export the model
// module.exports = mongoose.model('ContactUs', contactusSchema);
const contactUsSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    lastname: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    company: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "",
    },

    mobile: {
      type: String,
      required: true,
      match: /^[0-9]{10,15}$/, // numeric only
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    message: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 2000,
      trim: true,
    },

    captchaToken: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("ContactUs", contactUsSchema);
