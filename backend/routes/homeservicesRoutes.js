const express = require("express");
const router = express.Router();
const homeservicesController = require("../controllers/homeservicesController");
const { upload } = require("../middleware/uploadMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", homeservicesController.getAllHomeservice);
router.get("/all", homeservicesController.getAllwithChildHomeservice);
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  homeservicesController.createHomeservice
);
router.get("/:id", homeservicesController.getHomeserviceById);
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  homeservicesController.updateHomeservice
);
router.delete("/:id", authMiddleware, homeservicesController.deleteHomeservice);

module.exports = router;
