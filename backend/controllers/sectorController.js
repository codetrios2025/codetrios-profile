const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Sector = require("../models/sectorModel");

// Get all Sectors
exports.getAllSector = catchAsyncErrors(async (req, res, next) => {
    const sector = await Sector.find();
 
    res.status(200).json({
        success: true,
        sector,
    });
});

// Get Sector by Link
exports.getSectorByLink = catchAsyncErrors(async (req, res, next) => {
    const { link } = req.params;
    

    const sector = await Sector.find(req.params);
    const sectors = await Sector.find({});

    // Extract title and link from each sector
    const titlesAndLinks = sectors.map(sector => ({
        title: sector.title,
        link: sector.link
    }));// Flatten the array to avoid nested arrays

    res.status(200).json({
        success: true,
        sector,
        titles :titlesAndLinks
    });
});

// Create a Sector
exports.createSector = catchAsyncErrors(async (req, res, next) => {
    const { title, link, order, description,subdescription,projecttitle, fields } = req.body;
    const image = req.files.image ? req.files.image[0].filename : null;
    const innerimage = req.files.innerimage ? req.files.innerimage[0].filename : null;

    if (!image) {
        return next(new ErrorHander("Image is required"));
    }

    const fieldsArray = [];
    if (fields) {
        fields.forEach((field, index) => {
            const pageimageFile = req.files[`fields[${index}][pageimage]`];
            const pageimage = pageimageFile ? pageimageFile[0].filename : '';

            fieldsArray.push({
                title: field.title,
                subtitle: field.subtitle,
                order: field.order,
                description: field.description,
                pageimage: pageimage
            });
        });
    }

    const newSector = new Sector({
        title,
        link,subdescription,projecttitle,
        order,
        description,
        image,
        innerimage,
        fields: fieldsArray
    });

    const sector = await newSector.save();
    res.status(201).json(sector);
});

// Get a single Sector by ID
exports.getSectorById = catchAsyncErrors(async (req, res, next) => {
    const sector = await Sector.findById(req.params.id);
    if (!sector) {
        return next(new ErrorHander("Sector not found"));
    }
    res.json(sector);
});


// Update a Sector
exports.updateSector = catchAsyncErrors(async (req, res, next) => {
  const { title, link, order,subdescription,projecttitle,description, fields = [] } = req.body;
  const image = req.files.image ? req.files.image[0].filename : null;
  const innerimage = req.files.innerimage ? req.files.innerimage[0].filename : null;

  try {
      const sector = await Sector.findById(req.params.id);
      if (!sector) {
          return next(new ErrorHander("Sector not found"));
      }

      // Handle dynamic fields
      const fieldsArray = [];
      for (let i = 0; i < (fields ? fields.length : 0); i++) {
        const pageimageFile = req.files[`fields[${i}][pageimage]`];
        const pageimage = pageimageFile ? pageimageFile[0].filename : (sector.fields[i] ? sector.fields[i].pageimage : '');
  
        fieldsArray.push({
          title: fields[i].title,
          subtitle: fields[i].subtitle,
          order: fields[i].order,
          description: fields[i].description,
          pageimage: pageimage
        });
      };

      sector.title = title || sector.title;
      sector.link = link || sector.link;
      sector.order = order || sector.order;
      sector.subdescription = subdescription || sector.subdescription;
      sector.projecttitle = projecttitle || sector.projecttitle;
      sector.description = description || sector.description;
      sector.image = image || sector.image;
      sector.innerimage = innerimage || sector.innerimage;
      sector.fields = fieldsArray.length ? fieldsArray : sector.fields;

      const updatedSector = await sector.save();
      res.json(updatedSector);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// exports.updateSector = catchAsyncErrors(async (req, res, next) => {
//     const { title, link, order, description, fields } = req.body;
//     const image = req.files.image ? req.files.image[0].filename : null;
//     const innerimage = req.files.innerimage ? req.files.innerimage[0].filename : null;

//     try {
//         const sector = await Sector.findById(req.params.id);
//         if (!sector) {
//             return next(new ErrorHander("Sector not found"));
//         }

//         const fieldsArray = [];
//         if (fields) {
//             fields.forEach((field, index) => {
//                 const pageimageFile = req.files[`fields[${index}][pageimage]`];
//                 const pageimage = pageimageFile ? pageimageFile[0].filename : '';

//                 fieldsArray.push({
//                     title: field.title,
//                     subtitle: field.subtitle,
//                     order: field.order,
//                     description: field.description,
//                     pageimage: pageimage
//                 });
//             });
//         }

//         sector.title = title || sector.title;
//         sector.link = link || sector.link;
//         sector.order = order || sector.order;
//         sector.description = description || sector.description;
//         sector.image = image || sector.image;
//         sector.innerimage = innerimage || sector.innerimage;
//         sector.fields = fieldsArray.length ? fieldsArray : sector.fields;

//         const updatedSector = await sector.save();
//         res.json(updatedSector);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// Delete a Sector
exports.deleteSector = catchAsyncErrors(async (req, res, next) => {
    try {
        const sector = await Sector.findById(req.params.id);
        if (!sector) {
            return next(new ErrorHander("Sector not found"));
        }
        await sector.deleteOne();
        res.status(200).json({ message: 'Sector removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
