const mongoose = require('mongoose');

// Define the Job Posting schema
const jobPostingSchema = new mongoose.Schema({
  positionTitle: {
    type: String,
    required: true,
    trim: true,
  },
  preferredIndustry: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  numberOfVacancies: {
    type: Number,
    required: true,
    min: 1,
  },
  employmentType: {
    type: String,
    required: true,
    enum: ['Full Time Outsourced', 'Full Time ConsultantEmpanel/Freelancer/Man Day', 'Fixed Term Contract', 'Permanent', 'Temporary', 'Freelance'],
  },
  minSalary: {
    type: Number,
    min: 0,
  },
  maxSalary: {
    type: Number,
    min: 0,
  },
  education: {
    type: String,
    required: true,
    trim: true,
  },
  qualification: {
    type: String,
    required: true,
    trim: true,
  },
  modeOfEducation: {
    type: String,
    enum: ['Online', 'Offline', 'Hybrid'], // Example modes of education
  },
  specialization: {
    type: String,
    trim: true,
  },
  minExperience: {
    type: Number,
    min: 0,
  },
  maxExperience: {
    type: Number,
    min: 0,
  },
  certifications: {
    type: String,
    trim: true,
  },
  jobResponsibilities: {
    type: String,
    required: true,
    trim: true,
  },
  requirments: {
    type: String,
    trim: true,
  },
  expDetail: {
    type: String,
    trim: true,
  },
  postingStartDate: {
    type: Date,
    required: true,
  },
  postingEndDate: {
    type: Date,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  jobStatus: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: function () {
      return this.postingStartDate > new Date() ? 'Inactive' : 'Active';
    },
  },
  manualOverride: {
    type: Boolean,
    default: false,  // This flag indicates whether the status has been manually overridden
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Export the model
module.exports = mongoose.model('JobPosting', jobPostingSchema);
