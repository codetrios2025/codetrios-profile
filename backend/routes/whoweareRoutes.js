const express = require("express");
const router = express.Router();
const whoweareController = require("../controllers/whoweareController");
const { authMiddleware } = require("../middleware/authMiddleware");
router.get("/", whoweareController.getAllWhoweare);
router.post("/", authMiddleware, whoweareController.createWhoweare);
router.get("/:id", whoweareController.getWhoweareById);
router.put("/:id", authMiddleware, whoweareController.updateWhoweare);
router.delete("/:id", authMiddleware, whoweareController.deleteWhoweare);

module.exports = router;
