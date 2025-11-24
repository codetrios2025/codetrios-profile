const express = require("express");
const router = express.Router();
const custmoresController = require("../controllers/custmoresController");
const { upload } = require("../middleware/multipleFileUpload");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");
router.get("/", custmoresController.getAllCustomers);
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  custmoresController.createCustomers
);
router.get("/:id", custmoresController.getCustomersById);
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  custmoresController.updateCustomers
);
router.delete("/:id", authMiddleware, custmoresController.deleteCustomers);

module.exports = router;
