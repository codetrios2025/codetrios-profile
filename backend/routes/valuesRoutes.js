const express = require("express");
const router = express.Router();
const valuesController = require("../controllers/valuesController");
const { upload } = require("../middleware/uploadMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", valuesController.getAllvalues);
router.get("/valuetype", valuesController.getByvaluesTypevalues);
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  valuesController.createvalues
);
router.get("/:id", valuesController.getvaluesById);
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  valuesController.updatevalues
);
router.delete("/:id", authMiddleware, valuesController.deletevalues);

module.exports = router;
