// routes/applicationRoutes.js
const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController");
const { upload } = require("../middleware/uploadMiddleware");
// POST /api/applications - Create a new application
router.post(
  "/",
  upload.single("resume"),
  applicationController.createApplication
);
//router.get('/:jobId', applicationController.listApplicationsByJob);
router.get(
  "/get-csrf-token",
  applicationController.csrfProtection,
  applicationController.getCsrfToken
);
router.get("/:jobId", applicationController.getApplicationReport);
router.get("/export/:jobId", applicationController.exportApplicationsToCSV);
router.get("/download-resume/:filename", applicationController.downloadResume);

module.exports = router;
