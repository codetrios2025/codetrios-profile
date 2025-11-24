const JobPosting = require('../models/jobPostingModel');
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// Helper function to generate a random numeric job ID
function generateRandomJobId() {
  // Generates a random number between 100000 and 999999
  return Math.floor(Math.random() * 900000) + 100000;
}

// Create a new job posting
exports.createJobPosting = catchAsyncErrors(async (req, res, next) => {
  //const jobPosting = await JobPosting.create(req.body);
  // Generate a random numeric job ID
  //const jobId = generateRandomJobId();

  // Destructure job fields from request body
  const {
    jobId,positionTitle, preferredIndustry, location, numberOfVacancies, employmentType,
    minSalary, maxSalary, education, qualification, modeOfEducation, specialization,
    minExperience, maxExperience, certifications, jobResponsibilities, postingStartDate,
    postingEndDate
  } = req.body;

  // Create new job posting with generated numeric job ID
  const newJob = new JobPosting({
    positionTitle,
    preferredIndustry,
    location,
    numberOfVacancies,
    employmentType,
    minSalary,
    maxSalary,
    education,
    qualification,
    modeOfEducation,
    specialization,
    minExperience,
    maxExperience,
    certifications,
    jobResponsibilities,
    postingStartDate,
    postingEndDate,
    jobId, // Include the generated numeric job ID
  });

  // Save the new job posting
  const savedJob = await newJob.save();
  res.status(201).json({
    success: true,
    data: savedJob,
  });
});

// Get all job postings
exports.getAllJobPostings = catchAsyncErrors(async (req, res, next) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 jobs per page
    const skip = (page - 1) * limit;

    const jobs = await JobPosting.find({ jobStatus: 'Active' }).skip(skip).limit(limit); // Fetch jobs with pagination
    const totalJobs = await JobPosting.countDocuments(); // Total number of jobs

    
    res.status(200).json({
      success: true,
      data : jobs,
      totalJobs,
      totalPages: Math.ceil(totalJobs / limit),
      currentPage: page,
    });
});

// Get a single job posting by ID
exports.getJobPostingById = catchAsyncErrors(async (req, res, next) => {
  const jobPosting = await JobPosting.findById(req.params.id);
  if (!jobPosting) {
    return next(new ErrorHandler('Job not found', 404));
  }
  res.status(200).json({
    success: true,
    data: jobPosting,
  });
});

// Update a job posting by ID
exports.updateJobPosting = catchAsyncErrors(async (req, res, next) => {
  let jobPosting = await JobPosting.findById(req.params.id);
  if (!jobPosting) {
    return next(new ErrorHandler('Job not found', 404));
  }
  jobPosting = await JobPosting.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: jobPosting,
  });
});

// Delete a job posting by ID
exports.deleteJobPosting = catchAsyncErrors(async (req, res, next) => {
  const jobPosting = await JobPosting.findById(req.params.id);
  if (!jobPosting) {
    return next(new ErrorHandler('Job not found', 404));
  }
  await jobPosting.deleteOne({ _id: req.params.id });
  res.status(200).json({
    success: true,
    message: 'Job deleted successfully',
  });
});

// Endpoint to fetch unique locations from jobs

exports.getLocation = catchAsyncErrors(async (req, res,next)=>{
  const locations = await JobPosting.distinct('location'); // Fetch unique locations
  if (!locations) {
    return next(new ErrorHandler('Location not found', 404));
  }
  res.status(200).json({
    success: true,
    data: locations,
  });
})

exports.getRole = catchAsyncErrors(async (req, res,next)=>{
  const role = await JobPosting.distinct('positionTitle'); // Fetch unique locations
   //return false;
  if (!role) {
    return next(new ErrorHandler('Position Title not found', 404));
  }
  res.status(200).json({
    success: true,
    data: role,
  });
})

exports.getSpecialisation = catchAsyncErrors(async (req, res, next) => {
  // Fetch all specializations
  const specializations = await JobPosting.find({}, 'specialization'); 

  if (!specializations || specializations.length === 0) {
    return next(new ErrorHandler('Specializations not found', 404));
  }

  // Extract and split specializations, then flatten the array
  const allSpecializations = specializations
    .map(item => item.specialization.split(',')) // Split by comma
    .flat() // Flatten the array of arrays into a single array
    .map(specialization => specialization.trim()); // Trim spaces and normalize case

  // Get unique specializations
  const uniqueSpecializations = [...new Set(allSpecializations)];

  res.status(200).json({
    success: true,
    data: uniqueSpecializations,
  });
});
/**
 * Updates the status of a job (Active/Inactive).
 * 
 * @param {Object} req - Express request object containing jobId in the request.
 * @param {Object} res - Express response object.
 * @returns {JSON} Response with success message or error.
 */
exports.updateJobStatus = async (req, res) => {
  try {
    const { jid } = req.params;

    // Find the job by jobId
    const job = await JobPosting.findOne({"_id": jid });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    // Toggle job status
    job.jobStatus = job.jobStatus === 'Active' ? 'Inactive' : 'Active';
    
    job.markModified('jobStatus');
    
    // await job.save();
    const updatedJob = await JobPosting.updateOne({ _id: jid }, { jobStatus: job.jobStatus });
   
    return res.status(200).json({ message: 'Job status updated', jobStatus: job.jobStatus });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Search API to filter jobs by any field
exports.searchJobs = async (req, res) => {
  try {
    const { query } = req.query; // Extract search query from URL

    // If no query is provided, return all jobs
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    // Search across multiple fields using $regex (case insensitive search)
    const jobs = await JobPosting.find({
      $or: [
        { jobId: { $regex: query, $options: 'i' } },
        { positionTitle: { $regex: query, $options: 'i' } },
        { location: { $regex: query, $options: 'i' } },
        { employmentType: { $regex: query, $options: 'i' } },
        { education: { $regex: query, $options: 'i' } },
        { qualification: { $regex: query, $options: 'i' } },
        { modeOfEducation: { $regex: query, $options: 'i' } },
        // Add more fields if necessary
      ],
    });

    if (jobs.length === 0) {
      return res.status(404).json({ message: 'No jobs found matching the query' });
    }

    return res.status(200).json(jobs); // Return matching jobs
  } catch (error) {
    console.error('Error searching jobs:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
