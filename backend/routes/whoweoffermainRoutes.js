const express = require("express");
const router = express.Router();
const whoweoffermainController = require("../controllers/whoweoffermainController");
const { authMiddleware } = require("../middleware/authMiddleware");
router.get("/", whoweoffermainController.getAllWhoweoffermain);
router.post("/", authMiddleware, whoweoffermainController.createWhoweoffermain);
router.get("/:id", whoweoffermainController.getWhoweoffermainById);
router.put(
  "/:id",
  authMiddleware,
  whoweoffermainController.updateWhoweoffermain
);
router.delete(
  "/:id",
  authMiddleware,
  whoweoffermainController.deleteWhoweoffermain
);

module.exports = router;
