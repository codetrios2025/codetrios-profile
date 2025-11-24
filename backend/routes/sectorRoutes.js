const express = require("express");
const router = express.Router();
const sectorController = require("../controllers/sectorController");
const { upload } = require("../middleware/uploadMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");

const uploadMiddleware = (req, res, next) => {
  const fields = [
    { name: "image", maxCount: 1 },
    { name: "innerimage", maxCount: 1 },
  ];

  // Dynamically handle `fields[].pageimage`
  for (let i = 0; i < 10; i++) {
    // Adjust 10 to the maximum number of fields you expect
    fields.push({ name: `fields[${i}][pageimage]`, maxCount: 1 });
  }

  // Use multer to handle these fields
  upload.fields(fields)(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};
router.get("/", sectorController.getAllSector);
router.get("/detail/:link", sectorController.getSectorByLink);
router.post(
  "/",
  authMiddleware,
  uploadMiddleware,
  sectorController.createSector
);
router.get("/:id", sectorController.getSectorById);
router.put(
  "/:id",
  authMiddleware,
  uploadMiddleware,
  sectorController.updateSector
);
router.delete("/:id", authMiddleware, sectorController.deleteSector);

module.exports = router;
