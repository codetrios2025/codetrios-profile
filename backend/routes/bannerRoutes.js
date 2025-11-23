const express = require("express");
const router = express.Router();
const bannerController = require("../controllers/bannerController");
const { upload } = require("../middleware/uploadMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");
router.get("/", bannerController.getAllBanners);
router.post(
  "/",
  authMiddleware,
  upload.single("bannerImage"),
  bannerController.createBanner
);
router.get("/:id", bannerController.getBannerById);
router.put(
  "/:id",
  authMiddleware,
  upload.single("bannerImage"),
  bannerController.updateBanner
);
router.delete("/:id", authMiddleware, bannerController.deleteBanner);

module.exports = router;
