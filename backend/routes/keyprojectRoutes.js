const express = require("express");
const router = express.Router();
const keyprojectController = require("../controllers/keyprojectController");
const { upload } = require("../middleware/uploadMiddleware");

const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", keyprojectController.getAllKeyproject);
router.get("/deatil/:link", keyprojectController.getUrlKeyproject);
router.post(
  "/",
  authMiddleware,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "innerimage", maxCount: 1 },
  ]),
  keyprojectController.createKeyproject
);
router.get("/:id", keyprojectController.getKeyprojectById);
router.put(
  "/:id",
  authMiddleware,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "innerimage", maxCount: 1 },
  ]),
  keyprojectController.updateKeyproject
);
router.delete("/:id", authMiddleware, keyprojectController.deleteKeyproject);

module.exports = router;
