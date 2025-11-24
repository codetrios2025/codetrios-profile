const express = require("express");
const router = express.Router();
const blogsController = require("../controllers/blogsController");
const { upload } = require("../middleware/uploadMiddleware");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");

router.get("/:link", blogsController.getAllblog);
// router.get('/', blogsController.getblogByLink);
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  blogsController.createblog
);
router.get("/:id", blogsController.getblogById);
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  blogsController.updateblog
);
router.delete("/:id", authMiddleware, blogsController.deleteblog);

module.exports = router;
