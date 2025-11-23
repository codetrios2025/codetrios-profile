const express = require("express");
const router = express.Router();
const carrerhomeController = require("../controllers/carrerhomeController");
const { upload } = require("../middleware/multipleFileUpload");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");

const uploadMiddleware = (req, res, next) => {
  upload.fields([{ name: "images", maxCount: 10 }])(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message }); // Send error message to the client
    }
    next();
  });
};

router.get("/", carrerhomeController.getAllcarrerhome);
router.post(
  "/",
  authMiddleware,
  uploadMiddleware,
  carrerhomeController.createcarrerhome
);
router.get("/:id", carrerhomeController.getcarrerhomeById);
router.put(
  "/:id",
  authMiddleware,
  uploadMiddleware,
  carrerhomeController.updatecarrerhome
);
router.delete("/:id", authMiddleware, carrerhomeController.deletecarrerhome);
router.delete("/teamimage/:teamId", carrerhomeController.deleteImageFromTeam);

module.exports = router;
