const express = require("express");
const router = express.Router();
const improvmentController = require("../controllers/improvmentController");
const { upload } = require("../middleware/uploadMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", improvmentController.getAllimprovment);
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  improvmentController.createimprovment
);
router.get("/:id", improvmentController.getimprovmentById);
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  improvmentController.updateimprovment
);
router.delete("/:id", authMiddleware, improvmentController.deleteimprovment);

module.exports = router;
