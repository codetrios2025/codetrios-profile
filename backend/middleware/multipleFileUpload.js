const multer = require('multer');
const path = require('path');

const fs = require('fs');


// Set storage engine
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      const rootUploadsFolder = './uploads';
      const fullDestination = req.params.module ? path.join(rootUploadsFolder, req.params.module) : rootUploadsFolder;

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

// Check file type
function checkFileType(file, cb) {
  // console.log("gg",file);
   const filetypes = /mp4|mkv|mov|pdf|jpeg|png|gif|xlsx|xls|jpg/;
 const mimeTypes = [
    'video/mp4',
    'video/mkv',
    'video/quicktime', // mov
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // XLSX
    'application/vnd.ms-excel', // XLS
    'image/jpg'
  ]
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimeTypes.includes(file.mimetype);
  // console.log(extname,"gg",file.mimetype,"filetypes",mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Videos, PDFs,xls and Images only!');
  }
}
// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 100000000 }, // Limit to 100MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
});

module.exports = { upload };
