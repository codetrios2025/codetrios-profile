// controllers/applicationController.js
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Application = require("../models/applicationModel");
const { Parser } = require("json2csv"); // Import json2csv
const csrf = require("csurf");

// Middleware to protect routes with CSRF
exports.csrfProtection = csrf({ cookie: true });

// Fetch CSRF token
exports.getCsrfToken = (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
};
// Create Application
exports.createApplication = catchAsyncErrors(async (req, res) => {
  const applicationData = req.body;
  console.log(req.file);
  if (req.file) {
    applicationData.resume = req.file.path; // `path` is the relative path where the file is stored
  } else {
    if (req.body.consent === true) {
      return res.status(400).json({ error: "Resume file is required" });
    } else {
      applicationData.resume = "";
    }
    //
  }
  const application = new Application(applicationData);
  const savedApplication = await application.save();
  res.status(200).json({
    success: true,
    savedApplication,
  });
});

exports.listApplicationsByJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    if (!jobId) {
      return res.status(400).json({ message: "Job ID is required" });
    }

    const applications = await Application.find({ jobId })
      .populate("jobId", "title") // Optional: populate job details if needed
      .exec();

    if (!applications.length) {
      return res
        .status(404)
        .json({ message: "No applications found for this job" });
    }

    res.status(200).json(applications);
  } catch (error) {
    console.error("Error retrieving applications:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Export applications to CSV for a specific job post
exports.exportApplicationsToCSV = async (req, res) => {
  try {
    const { jobId } = req.params;

    if (!jobId) {
      return res.status(400).json({ message: "Job ID is required" });
    }

    // Fetch applications by jobId
    const applications = await Application.find({ jobId }).exec();

    if (!applications.length) {
      return res
        .status(404)
        .json({ message: "No applications found for this job" });
    }

    // Define fields for the CSV
    const fields = [
      {
        label: "First Name",
        value: "personalDetails.firstName",
      },
      {
        label: "Last Name",
        value: "personalDetails.lastName",
      },
      {
        label: "Email",
        value: "contactDetails.emailId",
      },
      {
        label: "Mobile Number",
        value: "contactDetails.mobileNo",
      },
      {
        label: "Experience",
        value: (row) =>
          row.experience
            .map((exp) => `${exp.expertise} (${exp.yearsOfExperience} years)`)
            .join(", "),
      },
      {
        label: "Education",
        value: (row) =>
          row.educationDetails
            .map(
              (edu) => `${edu.relevantQualification} (${edu.specialization})`
            )
            .join(", "),
      },
      {
        label: "Certifications",
        value: (row) =>
          row.professionalCertifications
            .map(
              (cert) => `${cert.certificateName} (Valid until ${cert.validity})`
            )
            .join(", "),
      },
      {
        label: "Current CTC",
        value: "ctcDetails.currentCTC",
      },
      {
        label: "Net Salary",
        value: "ctcDetails.netSalary",
      },
      {
        label: "Joining Time",
        value: "joiningTime",
      },
    ];

    // Create CSV parser
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(applications);

    // Set headers for the CSV download
    res.header("Content-Type", "text/csv");
    res.attachment(`applications_job_${jobId}.csv`);
    res.send(csv);
  } catch (error) {
    console.error("Error exporting applications to CSV:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.downloadResume = async (req, res) => {
  try {
    const { filename } = req.params;
    const fileLocation = path.join(__dirname, "../uploads", filename); // Assuming resumes are stored in 'uploads' directory

    res.download(fileLocation, (err) => {
      if (err) {
        return res.status(404).send("File not found.");
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Error downloading file" });
  }
};

exports.getApplicationReport = async (req, res) => {
  const { jobId } = req.params;
  try {
    const applications = await Application.find({ jobId })
      .populate("jobId", "title") // Optional: populate job details if needed
      .lean(); // Use lean to get plain JS objects

    // Format the response
    const report = applications.map((app) => ({
      applicationDetails: {
        jobTitle: app.jobId?.positionTitle || "",
        preferredIndustry: app.jobId?.preferredIndustry || "",
        dateApplied: app.createdAt, // Assuming you have a createdAt field
      },
      personalDetails: {
        firstName: app.personalDetails.firstName || "",
        middleName: app.personalDetails.middleName || "",
        lastName: app.personalDetails.lastName || "",
        dateOfBirth: app.personalDetails.dateOfBirth || "",
        gender: app.personalDetails.gender || "",
        nationality: app.personalDetails.nationality || "",
      },
      contactDetails: {
        mobileNo: app.contactDetails.mobileNo || "",
        emailId: app.contactDetails.emailId || "",
        currentLocation: app.contactDetails.currentLocation || "",
      },
      educationDetails: app.educationDetails.map((ed) => ({
        relevantQualification: ed.relevantQualification || "",
        specialization: ed.specialization || "",
        mode: ed.mode || "",
      })),
      professionalCertifications: app.professionalCertifications.map(
        (cert) => ({
          certificateName: cert.certificateName || "",
          validity: cert.validity || "",
        })
      ),
      experience: app.experience.map((exp) => ({
        expertise: exp.expertise || "",
        yearsOfExperience: exp.yearsOfExperience || "",
      })),
      ctcDetails: {
        currentCTC: app.ctcDetails.currentCTC || "",
        netSalary: app.ctcDetails.netSalary || "",
      },
      joiningTime: app.joiningTime || "",
      resume: app.resume || "",
      dateOfSubmission: app.dateOfSubmission,
    }));

    // Send the report data
    res.json({ report });
  } catch (error) {
    res.status(500).json({ message: "Error generating report", error });
  }
};
