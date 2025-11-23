const express = require("express");
const router = express.Router();
const mapController = require("../controllers/mapController");
const { authMiddleware } = require("../middleware/authMiddleware");
router.get("/", mapController.getAllMap);
router.post("/", authMiddleware, mapController.createMap);
router.get("/:id", mapController.getMapById);
router.put("/:id", authMiddleware, mapController.updateMap);
router.delete("/:id", authMiddleware, mapController.deleteMap);

module.exports = router;
