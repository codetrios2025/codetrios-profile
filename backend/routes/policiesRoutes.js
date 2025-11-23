const express = require("express");
const router = express.Router();
const policiesController = require("../controllers/policiesController");
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
router.get("/", policiesController.getAllPolicies);
router.post(
  "/",
  authMiddleware,
  uploadMiddleware,
  policiesController.createPolicy
);
router.get("/:id", policiesController.getPolicyById);
router.put(
  "/:id",
  authMiddleware,
  uploadMiddleware,
  policiesController.updatePolicy
);
router.delete("/:id", authMiddleware, policiesController.deletePolicy);

module.exports = router;
