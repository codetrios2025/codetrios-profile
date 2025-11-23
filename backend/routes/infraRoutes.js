const express = require("express");
const router = express.Router();
const infraController = require("../controllers/infraController");
const { upload } = require("../middleware/uploadMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", infraController.getAllinfra);
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  infraController.createinfra
);
router.get("/:id", infraController.getinfraById);
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  infraController.updateinfra
);
router.delete("/:id", authMiddleware, infraController.deleteinfra);

module.exports = router;
