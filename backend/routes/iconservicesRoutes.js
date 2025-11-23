const express = require('express');
const router = express.Router();
const iconserviceController =require('../controllers/iconserviceController');
const {upload} = require('../middleware/uploadMiddleware');

const uploadMiddleware = (req, res, next) => {
    const fields = [];
    for (let i = 0; i < 10; i++) {
      fields.push({ name: `fields[${i}][icon]`, maxCount: 1 });
    }
    upload.fields(fields)(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      next();
    });
    };


// icon Api
router.get('/', iconserviceController.getAllIcon);
router.get('/:link', iconserviceController.getAllIconByLInk);
router.post('/', uploadMiddleware, iconserviceController.createIcon);
router.get('/:id', iconserviceController.geticonserviceById);
router.put('/:id', uploadMiddleware, iconserviceController.updateiconservice);
router.delete('/:id', iconserviceController.deleteiconservice);
router.delete('/iconservice/:iconserviceId/field/:fieldId', iconserviceController.removeFieldFromIconService);



module.exports = router;
