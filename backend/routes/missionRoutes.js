const express = require("express");
const router = express.Router();
const missionController = require("../controllers/missionController");
const { upload } = require("../middleware/uploadMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", missionController.getAllMission);
router.post(
  "/",
  authMiddleware,
  upload.fields([
    { name: "backgroundimage", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  missionController.createMission
);
router.get("/:id", missionController.getMissionById);
router.put(
  "/:id",
  authMiddleware,
  upload.fields([
    { name: "backgroundimage", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  missionController.updateMission
);
router.delete("/:id", authMiddleware, missionController.deleteMission);

module.exports = router;
