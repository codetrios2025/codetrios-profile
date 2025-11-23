const express = require("express");
const router = express.Router();
const downloadTypeController = require("../controllers/downloadTypeController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", downloadTypeController.getAllDownloadType);
router.get("/list/", downloadTypeController.getAllDownloadTypebyTitle);
router.post("/",authMiddleware, downloadTypeController.createDownloadType);
router.get("/:id", downloadTypeController.getDownloadTypeById);
router.put("/:id", authMiddleware,downloadTypeController.updateDownloadType);
router.delete("/:id", authMiddleware, downloadTypeController.deleteDownloadType);

module.exports = router;
