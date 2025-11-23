const express = require("express");
const router = express.Router();
const downloadController = require("../controllers/fooddownloadController");
const { upload } = require("../middleware/multipleFileUpload");
const { authMiddleware } = require("../middleware/authMiddleware");
const uploadMiddleware = (req, res, next) => {
  const fields = [];
  for (let i = 0; i < 10; i++) {
    fields.push({ name: `pdfs[${i}][pdf]`, maxCount: 1 });
  }

  upload.fields(fields)(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};
router.get("/", downloadController.getAllDownload);
router.get("/list/", downloadController.getAllDownloadbyTitle);
router.post(
  "/",
  authMiddleware,
  uploadMiddleware,
  downloadController.createDownload
);
router.get("/:id", downloadController.getDownloadById);
router.put(
  "/:id",
  authMiddleware,
  uploadMiddleware,
  downloadController.updateDownload
);
router.delete("/:id", authMiddleware, downloadController.deleteDownload);

module.exports = router;
