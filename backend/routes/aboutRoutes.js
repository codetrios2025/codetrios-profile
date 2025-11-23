const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/aboutController");
const { upload } = require("../middleware/uploadMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", aboutController.getAllabout);
router.post(
  "/",
  authMiddleware,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  aboutController.createabout
);
router.get("/:id", aboutController.getaboutById);
router.put(
  "/:id",
  authMiddleware,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  aboutController.updateabout
);
router.delete("/:id", authMiddleware, aboutController.deleteabout);

module.exports = router;
