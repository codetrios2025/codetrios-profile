const express = require('express');
const router = express.Router();
const servicedetailsController = require('../controllers/servicedetailsController');
const {upload} = require('../middleware/multipleFileUpload');

const uploadMiddleware = (req, res, next) => {
  // const fields = [];
  const fields = [
    { name: 'image', maxCount: 1 }, // Main title image
  ];
  for (let i = 0; i < 10; i++) {  // Assuming a maximum of 10 fields
    for (let j = 0; j < 10; j++) {  // Assuming a maximum of 10 images per field
      const fieldName = `fields[${i}][image][${j}]`;
      
        fields.push({ name: fieldName, maxCount: 10 });
     
    }
  }

  // Use multer to handle these dynamically generated fields
  upload.fields(fields)(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });

  };
  
router.get('/', servicedetailsController.getAllservicedetails);
router.get('/deatils/:link', servicedetailsController.getAllservicedetailsByUrl);
router.post('/', uploadMiddleware, servicedetailsController.createservicedetails);
router.get('/:id', servicedetailsController.getservicedetailsById);
router.put('/:id', uploadMiddleware, servicedetailsController.updateservicedetails);
router.delete('/:id', servicedetailsController.deleteservicedetails);
router.delete('/service/:serviceId/field/:fieldId', servicedetailsController.removeFieldFromServiceDetails);
router.delete('/teamimage/:serviceId', servicedetailsController.deleteImageFromTeam);


// Delete an image from a specific field and image index
router.delete('/fieldImage/:serviceDetailId/fields/:fieldIndex/image/:imageIndex', servicedetailsController.deleteImageFromField);





module.exports = router;
