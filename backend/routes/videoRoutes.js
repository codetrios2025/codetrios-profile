const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");
const { upload } = require("../middleware/multipleFileUpload");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", videoController.getAllvideo);
router.post(
  "/",
  authMiddleware,
  upload.fields([{ name: "video", maxCount: 1 }]),
  videoController.createvideo
);
router.get("/:id", videoController.getvideoById);
router.put(
  "/:id",
  authMiddleware,
  upload.fields([{ name: "video", maxCount: 1 }]),
  videoController.updatevideo
);
router.delete("/:id", authMiddleware, videoController.deletevideo);

module.exports = router;
