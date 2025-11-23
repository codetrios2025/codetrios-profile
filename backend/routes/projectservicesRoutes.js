const express = require('express');
const router = express.Router();
const projectserviceController = require('../controllers/projectserviceController');
const iconserviceController =require('../controllers/iconserviceController');
const {upload} = require('../middleware/multipleFileUpload');

const uploadMiddleware = (req, res, next) => {
    upload.fields([{ name: 'images', maxCount: 10 }])(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message }); // Send error message to the client
      }
      next();
    });
  };
  const uploadMiddlewareICon = (req, res, next) => {
    upload.fields([{ name: 'icon', maxCount: 1 }])(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message }); // Send error message to the client
      }
      next();
    });
  };
router.get('/', projectserviceController.getAllprojectservice);
router.post('/', uploadMiddleware, projectserviceController.createprojectservice);
router.get('/:id', projectserviceController.getprojectserviceById);
router.put('/:id', uploadMiddleware, projectserviceController.updateprojectservice);
router.delete('/:id', projectserviceController.deleteprojectservice);
router.delete('/teamimage/:serviceId', projectserviceController.deleteImageFromTeam);
// icon Api
router.get('/iconvalue/', iconserviceController.getAllIcon);
router.post('/iconvalue/', uploadMiddlewareICon, iconserviceController.createIcon);

module.exports = router;
