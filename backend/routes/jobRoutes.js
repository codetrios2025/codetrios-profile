const express = require("express");
const router = express.Router();
const {
  createJobPosting,
  getAllJobPostings,
  getJobPostingById,
  updateJobPosting,
  deleteJobPosting,
  getLocation,
  getRole,
  getSpecialisation,
  updateJobStatus,
  searchJobs,
} = require("../controllers/jobController");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");

// Route to create a new job posting
router.post("/", authMiddleware, createJobPosting);

// Route to get all job postings
router.get("/", getAllJobPostings);

router.get("/role", getRole);
router.get("/location", getLocation);
router.get("/skill", getSpecialisation);
router.get("/search", searchJobs);
router.patch("/status/:jid", authMiddleware, updateJobStatus);

// Route to get a single job posting by ID
router.get("/:id", getJobPostingById);

// Route to update a job posting by ID
router.put("/:id", authMiddleware, updateJobPosting);

// Route to delete a job posting by ID
router.delete("/:id", deleteJobPosting);

module.exports = router;
