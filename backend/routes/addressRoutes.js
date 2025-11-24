const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");
const upload = require("../middleware/uploadMiddleware"); // Ensure this is defined correctly
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");
router.get("/", addressController.getAllAddress);
router.post("/", authMiddleware, addressController.createAddress);
router.get("/:id", addressController.getAddressById);
router.put("/:id", authMiddleware, addressController.updateAddress); // Ensure this matches the controller method name
router.delete("/:id", authMiddleware, addressController.deleteAddress);

module.exports = router;
