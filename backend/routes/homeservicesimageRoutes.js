const express = require("express");
const router = express.Router();
const homeservicesimageController = require("../controllers/homeservicesimageController");
const { upload } = require("../middleware/uploadMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", homeservicesimageController.getAllHomeserviceimage);
router.get(
  "/byservice",
  homeservicesimageController.getAllHomeserviceimageByName
);
router.post(
  "/",
  authMiddleware,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "innerimage", maxCount: 1 },
    { name: "imageicon", maxCount: 1 },
  ]),
  homeservicesimageController.createHomeserviceimage
);
router.get("/:id", homeservicesimageController.getHomeserviceimageById);
router.put(
  "/:id",
  authMiddleware,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "innerimage", maxCount: 1 },
    { name: "imageicon", maxCount: 1 },
  ]),
  homeservicesimageController.updateHomeserviceimage
);
router.delete(
  "/:id",
  authMiddleware,
  homeservicesimageController.deleteHomeserviceimage
);

module.exports = router;
