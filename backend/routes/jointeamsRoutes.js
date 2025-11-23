const express = require("express");
const router = express.Router();
const jointeamsController = require("../controllers/jointeamsController");
const { upload } = require("../middleware/multipleFileUpload");
const { authMiddleware } = require("../middleware/authMiddleware");
const uploadMiddleware = (req, res, next) => {
  upload.fields([{ name: "images", maxCount: 10 }])(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message }); // Send error message to the client
    }
    next();
  });
};

router.get("/", jointeamsController.getAlljointeams);
router.post(
  "/",
  authMiddleware,
  uploadMiddleware,
  jointeamsController.createjointeams
);
router.get("/:id", jointeamsController.getjointeamsById);
router.put(
  "/:id",
  authMiddleware,
  uploadMiddleware,
  jointeamsController.updatejointeams
);
router.delete("/:id", authMiddleware, jointeamsController.deletejointeams);
router.delete("/teamimage/:teamId", jointeamsController.deleteImageFromTeam);

module.exports = router;
