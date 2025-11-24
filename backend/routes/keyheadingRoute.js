const express = require("express");
const router = express.Router();
const keyheadingController = require("../controllers/keyheadingController");
const { authMiddleware } = require("../middleware/authMiddleware");
router.get("/", keyheadingController.getAllkeyheading);
router.post("/", authMiddleware, keyheadingController.createkeyheading);
router.get("/:id", keyheadingController.getkeyheadingById);
router.put("/:id", authMiddleware, keyheadingController.updatekeyheading);
router.delete("/:id", authMiddleware, keyheadingController.deletekeyheading);

module.exports = router;
