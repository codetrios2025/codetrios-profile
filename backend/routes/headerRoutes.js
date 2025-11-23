const express = require("express");
const router = express.Router();
const headerController = require("../controllers/headerController");
const { upload } = require("../middleware/uploadMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", headerController.getAllHeader);
router.get("/tabing", headerController.getAllHeaderByTitle);
router.get("/list", headerController.getHeader);
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  headerController.createHeader
);
router.get("/:id", headerController.getHeaderById);
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  headerController.updateHeader
);
router.delete("/:id", authMiddleware, headerController.deleteHeader);

module.exports = router;
