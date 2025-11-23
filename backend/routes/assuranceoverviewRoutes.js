const express = require('express');
const router = express.Router();
const assuranceoverviewController = require('../controllers/assuranceoverviewController');
const {upload} = require('../middleware/uploadMiddleware');

router.get('/', assuranceoverviewController.getAllAssuranceOverview);
router.get('/all', assuranceoverviewController.getAlldataOfAssuranceOverview);
router.post('/', upload.single('image'), assuranceoverviewController.createAssuranceOverview);
router.get('/:id', assuranceoverviewController.getAssuranceOverviewId);
router.put('/:id',upload.single('image'), assuranceoverviewController.updateAssuranceOverview);
router.delete('/:id', assuranceoverviewController.deleteAssuranceOverview);

module.exports = router;