const multer = require('multer')
const fs =  require('fs');
const path =  require('path');

// Dynamic storage configuration
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // Define the root uploads folder
        const rootUploadsFolder = './uploads';

        // Obtain module from URL parameter or any other logic
        //const moduleFolder = req.params.module || 'default';
        
        //const fullDestination = path.join(rootUploadsFolder, moduleFolder);
        const fullDestination = req.params.module ? path.join(rootUploadsFolder, req.params.module) : rootUploadsFolder;
        // Create the module folder if it doesn't exist
        if (!fs.existsSync(fullDestination)) {
            fs.mkdirSync(fullDestination, { recursive: true });
        }

        cb(null, fullDestination);
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Unsupported file type'), false);
    }
};

exports.upload = multer({ storage: storage, fileFilter: fileFilter });

// // Export the middleware function for single file upload
// exports.uploadSingle = (fieldName) => upload.single(fieldName);

// // Export the middleware function for multiple file uploads
// exports.uploadMultiple = (fieldName, maxCount) => upload.array(fieldName, maxCount);

//module.exports = upload;