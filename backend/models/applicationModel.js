const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  expertise: { type: String, default: null },
  yearsOfExperience: { type: Number, default: null },
});

const certificationSchema = new mongoose.Schema({
  certificateName: { type: String, default: null },
  validity: { type: String, default: null },
});

const educationSchema = new mongoose.Schema({
  relevantQualification: { type: String, default: null },
  specialization: { type: String, default: null },
  mode: { type: String, default: null },
});

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobPosting', // Reference to the Job model
    required: true,
  },
  empDetail:{
    empId: { type: String, default: null },
    location: { type: String },
    duration: { type: String, default: null },
    designation: { type: String, default: null },
    entityName: { type: String, default: null },
    reportingAuthority: { type: String, default: null },
  },
  personalDetails: {
    firstName: { type: String, default: null },
    middleName: { type: String },
    lastName: { type: String, default: null },
    dateOfBirth: { type: Date, default: null },
    gender: { type: String, default: null },
    nationality: { type: String, default: null },
  },
  
  contactDetails: {
    mobileNo: { type: String, default: null },
    emailId: { type: String, default: null },
    currentLocation: { type: String, default: null },
  },
  
  educationDetails: [educationSchema],
  
  professionalCertifications: [certificationSchema],
  
  experience: [experienceSchema],
  
  ctcDetails: {
    currentCTC: { type: Number, default: null },
    netSalary: { type: Number, default: null },
  },
  
  joiningTime: { type: String, default: null },
  resume:{type:String, default: null},
  dateOfSubmission: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Application', applicationSchema);
