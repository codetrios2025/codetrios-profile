const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ProjectService = require("../models/projectserviceModel");
const IconService = require("../models/iconModel");
const fs = require('fs');
const path = require('path');

// Icon Service
// @desc Get all Icon
exports.getAllIconByLInk = catchAsyncErrors(async (req, res, next) => {

  const { link } = req.params;
  const iconservice = await IconService.find(req.params);
  res.status(200).json({
    success: true,
    iconservice,
  });
});
exports.getAllIcon = catchAsyncErrors(async (req, res, next) => {
  const iconservice = await IconService.find();
  res.status(200).json({
    success: true,
    iconservice,
  });
});

// @desc Create an Icon
exports.createIcon = catchAsyncErrors(async (req, res, next) => {
  try {
    const { title, link } = req.body;
  
    const fields = [];  
  const field = req.body.fields || [];
  field.forEach((fileData, index) => {
   
  if (fileData) {
    const file = req.files[`fields[${index}][icon]`];
    const pdfFilePath = file ? file[0].filename : '';
   
    fields.push({
      title:fileData.title,
        order:fileData.order,
        description:fileData.description,
      icon: pdfFilePath
    });
  }
  });
  
    
      const newiconservice = new IconService({
        title,
        link,
        fields
    });
   
     
  
      const iconservice = await newiconservice.save();
      res.status(201).json({
        success: true,
        iconservice: iconservice
    });
    } catch (error) {
     
      res.status(400).json({ message: error.message });
    }
});


// @desc Get a single projectservice by ID
exports.geticonserviceById = catchAsyncErrors(async (req, res, next) => {
  const iconservice = await IconService.findById(req.params.id);
  if (!iconservice) {
    return next(new ErrorHander('Icon not found'));
  }
  res.json(iconservice);
});

// @desc Update a iconservice
exports.updateiconservice = catchAsyncErrors(async (req, res, next) => {
  const { title, description } = req.body;
  
  // Find the existing icon service by ID
  let iconservice = await IconService.findById(req.params.id);
  if (!iconservice) {
    return next(new ErrorHander('Icon not found'));
  }

  // Clone existing fields to update them
  let updatedFields = [...iconservice.fields];

  // Get the updated field data from the request body
  const fieldData = req.body.fields || [];

  fieldData.forEach((fileData, index) => {
    const existingField = updatedFields[index];
    
    if (existingField) {
      // If an image is provided, update it; otherwise, keep the existing image
      const file = req.files[`fields[${index}][icon]`];
      const newImage = file ? file[0].filename : existingField.icon; // Retain the existing image if no new one is provided

      // Update the existing field with new data or keep the old data if not provided
      updatedFields[index] = {
        ...existingField,
        title: fileData.title || existingField.title,
        order: fileData.order || existingField.order,
        description: fileData.description || existingField.description,
        icon: newImage, // Retain old icon if new one is not provided
      };
    } else if (fileData) {
      // Handle new fields that are added
      const file = req.files[`fields[${index}][icon]`];
      const newImage = file ? file[0].filename : '';

      updatedFields.push({
        title: fileData.title,
        order: fileData.order,
        description: fileData.description,
        icon: newImage,
      });
    }
  });

  // Update other service properties
  iconservice.title = title || iconservice.title;
  iconservice.description = description || iconservice.description;
  iconservice.fields = updatedFields.length ? updatedFields : iconservice.fields;

  // Save the updated icon service
  const updatediconservice = await iconservice.save();

  res.json(updatediconservice);
});


// @desc Delete a projectservice
exports.deleteiconservice = catchAsyncErrors(async (req, res, next) => {
  const iconservice = await IconService.findById(req.params.id);
  if (!iconservice) {
    return next(new ErrorHander('icon not found'));
  }

  await iconservice.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: 'Icon removed' });
});

exports.removeFieldFromIconService = catchAsyncErrors(async (req, res, next) => {
  const { iconserviceId, fieldId } = req.params;

  try {
    // Find the service by ID and update it by removing the specified field
    const updatedService = await IconService.findByIdAndUpdate(
      iconserviceId,
      { $pull: { fields: { _id: fieldId } } },
      { new: true } // Returns the modified document
    );

    if (!updatedService) {
      return res.status(404).json({ message: 'Service detail not found' });
    }

    res.status(200).json({ message: 'Field removed successfully', data: updatedService });
  } catch (error) {
    res.status(500).json({ message: 'Error removing field', error });
  }
});


