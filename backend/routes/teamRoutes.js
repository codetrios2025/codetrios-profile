const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");
const { upload } = require("../middleware/uploadMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", teamController.getAllteam);
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  teamController.createteam
);
router.get("/:id", teamController.getteamById);
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  teamController.updateteam
);
router.delete("/:id", authMiddleware, teamController.deleteteam);

module.exports = router;
