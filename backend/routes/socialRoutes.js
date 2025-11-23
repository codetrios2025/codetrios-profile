const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');
const {upload} = require('../middleware/uploadMiddleware');

router.get('/', socialController.getAllSocial);
router.post('/', upload.single('image'), socialController.createSocial);
router.get('/:id', socialController.getSocialById);
router.put('/:id', upload.single('image'), socialController.updateSocial);
router.delete('/:id', socialController.deleteSocial);

module.exports = router;
