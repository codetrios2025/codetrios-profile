const express = require("express");
const router = express.Router();
const contactusController = require("../controllers/contactusController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", authMiddleware, contactusController.getAllAddress);
router.post("/", contactusController.createAddress);
router.get(
  "/get-csrf-token",
  contactusController.csrfProtection,
  contactusController.getCsrfToken
);
router.get("/:id", contactusController.getAddressById);
router.delete("/:id", authMiddleware, contactusController.deleteAddress);

module.exports = router;
