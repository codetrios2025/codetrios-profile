const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const WhyChooseUs = require("../models/whychooseUsModel");

const fs = require('fs');
const path = require('path');

// @desc Get all service details
exports.getAllwhychooseus = catchAsyncErrors(async (req, res, next) => {
  const whychooseus = await WhyChooseUs.find();
  res.status(200).json({
    success: true,
    whychooseus,
  });
});
// @desc Get data by url service details
exports.getAllwhychooseusByUrl = catchAsyncErrors(async (req, res, next) => {
  const whychooseus = await WhyChooseUs.find(req.params);
  res.status(200).json({
    success: true,
    whychooseus,
  });
});
// @desc Create a new service detail
exports.createwhychooseus = catchAsyncErrors(async (req, res, next) => {
  try {
    const { titlename, link, description,subtitle } = req.body;
    const image = req.files && req.files.image ? req.files.image[0].filename : null;
    // Log request details for debugging
    

    const fields = [];
    const field = req.body.fields || [];

    field.forEach((fileData, index) => {
      console.log(`Processing field ${index}:`, fileData);

      if (fileData) {
        // Extract all images for the current field
        const imageFiles = [];
        
        // Iterate through possible image indices
        for (let i = 0; i < 10; i++) {  // Adjust the range as necessary
          const fieldName = `fields[${index}][image][${i}]`;
          if (req.files[fieldName]) {
            imageFiles.push(...req.files[fieldName]);
          }
        }

      
        // Ensure that imageFiles is not empty
        const filesArray = imageFiles.map(file => {
          if (file) {  // Check if file is defined
            return {
              fileName: file.filename,
              filePath: file.path
            };
          }
          return null;  // Handle cases where file is undefined
        }).filter(file => file !== null);  // Remove null entries

        fields.push({
          title: fileData.title,
          link: fileData.link,
          order: fileData.order,
          description: fileData.description,
          iconfield: fileData.iconfield,
          image: filesArray
        });
      }
    });

    // Create new service detail entry
    const newServiceDetail = new WhyChooseUs({
      titlename,
      description,
      link,
      subtitle,
      image,
      fields
    });

    // Save the new service detail
    const savedServiceDetail = await newServiceDetail.save();
    
    res.status(201).json({
      success: true,
      servicedetails: savedServiceDetail
    });
  } catch (error) {
    console.error('Error creating service details:', error);
    res.status(400).json({ message: error.message });
  }
});


// @desc Get a service detail by ID
exports.getwhychooseusById = catchAsyncErrors(async (req, res, next) => {
  const servicedetails = await WhyChooseUs.findById(req.params.id);
  if (!servicedetails) {
    return next(new ErrorHander('ServiceDetails not found', 404));
  }
  res.status(200).json({
    success: true,
    servicedetails,
  });
});



exports.updatewhychooseus = catchAsyncErrors(async (req, res, next) => {
  try {
    const { id } = req.params; // Assuming you are passing the document ID in the URL params
    const { titlename, link, description,subtitle } = req.body;
    const image = req.files && req.files.image ? req.files.image[0].filename : null;
    
    // Find the service detail entry by ID
    const serviceDetail = await WhyChooseUs.findById(id);
    if (!serviceDetail) {
      return res.status(404).json({
        success: false,
        message: 'Service detail not found',
      });
    }

    // Update main fields if provided
    serviceDetail.titlename = titlename || serviceDetail.titlename;
    serviceDetail.description = description || serviceDetail.description;
    serviceDetail.link = link || serviceDetail.link;
    serviceDetail.subtitle = subtitle || serviceDetail.subtitle;
    serviceDetail.image = image || serviceDetail.image;

    // Process and update individual fields
    const fieldDataArray = req.body.fields || [];
    fieldDataArray.forEach((fileData, index) => {
      if (fileData) {
        // Update or add to an existing field
        const existingField = serviceDetail.fields[index];

        // Extract new images for this field
        const newImageFiles = [];
        for (let i = 0; i < 10; i++) {
          const fieldName = `fields[${index}][image][${i}]`;
          if (req.files && req.files[fieldName]) {
            newImageFiles.push(...req.files[fieldName]);
          }
        }

        // Convert the new images to the required schema format, ensuring only valid files are added
        const newImagesArray = newImageFiles
          .filter(file => file)  // Filter out undefined or null values
          .map(file => ({
            fileName: file.filename,
            filePath: file.path,
          }))
          .filter(image => image.fileName && image.filePath);  // Ensure that only valid images are added

        // If the field already exists, update it
        if (existingField) {
          existingField.title = fileData.title || existingField.title;
          existingField.link = fileData.link || existingField.link;
          existingField.order = fileData.order || existingField.order;
          existingField.description = fileData.description || existingField.description;
          existingField.iconfield = fileData.iconfield || existingField.iconfield;

          // Append valid new images to the existing ones
          if (newImagesArray.length > 0) {
            existingField.image = [...existingField.image, ...newImagesArray];
          }
        } else {
          // If the field does not exist, create a new one with valid images
          if (newImagesArray.length > 0) {
            serviceDetail.fields.push({
              title: fileData.title,
              link: fileData.link,
              order: fileData.order,
              description: fileData.description,
              iconfield: fileData.iconfield,
              image: newImagesArray,  // Add only valid images
            });
          }
        }
      }
    });

    // Save the updated service detail entry
    const updatedServiceDetail = await serviceDetail.save();

    res.status(200).json({
      success: true,
      servicedetails: updatedServiceDetail,
    });
  } catch (error) {
    console.error('Error updating service details:', error);
    res.status(400).json({ message: error.message });
  }
});


// @desc Delete a service detail by ID
exports.deletewhychooseus = catchAsyncErrors(async (req, res, next) => {
  const servicedetails = await WhyChooseUs.findById(req.params.id);
  if (!servicedetails) {
    return next(new ErrorHander('ServiceDetails not found', 404));
  }


  await servicedetails.deleteOne({ _id: req.params.id });
  res.status(200).json({
    success: true,
    message: 'ServiceDetails removed',
  });
});

// @desc Delete an image from a service detail
exports.deleteImageFromTeam = catchAsyncErrors(async (req, res, next) => {
  const { serviceId } = req.params;
  const { fileName } = req.body;

  const servicedetails = await WhyChooseUs.findById(serviceId);
  if (!servicedetails) {
    return next(new ErrorHander('ServiceDetails not found', 404));
  }

  const imageIndex = servicedetails.image.findIndex(image => image.fileName === fileName);
  if (imageIndex === -1) {
    return res.status(404).json({ error: 'Image not found' });
  }

  const imagePath = servicedetails.image[imageIndex].filePath;

  // Remove the image from the database array
  servicedetails.image.splice(imageIndex, 1);
  await servicedetails.save();

  // Optionally, delete the image file from the filesystem
  fs.unlink(path.join(__dirname, '..', imagePath), (err) => {
    if (err) {
      console.error(`Failed to delete image file: ${err.message}`);
    }
  });

  res.status(200).json({
    success: true,
    message: 'Image deleted successfully',
  });
});

exports.deleteImageFromField = catchAsyncErrors(async (req, res, next) => {
  try {
    const { serviceDetailId, fieldIndex, imageIndex } = req.params;

    // Find the service detail by ID
    const serviceDetail = await WhyChooseUs.findById(serviceDetailId);
    if (!serviceDetail) {
      return res.status(404).json({
        success: false,
        message: 'Service detail not found',
      });
    }

    // Ensure that the field exists
    if (!serviceDetail.fields[fieldIndex]) {
      return res.status(404).json({
        success: false,
        message: `Field at index ${fieldIndex} not found`,
      });
    }

    // Ensure that the image exists within the field
    const field = serviceDetail.fields[fieldIndex];
    if (!field.image || !field.image[imageIndex]) {
      return res.status(404).json({
        success: false,
        message: `Image at index ${imageIndex} not found in field ${fieldIndex}`,
      });
    }

    // Get the image path for potential file deletion
    const imageToDelete = field.image[imageIndex];

    // Remove the image from the array
    field.image.splice(imageIndex, 1);

    // Save the updated service detail document
    await serviceDetail.save();

    // Optionally, delete the image file from the server
    // You can use the 'fs' module to delete the file if needed
    const fs = require('fs');
    fs.unlink(imageToDelete.filePath, (err) => {
      if (err) {
        console.error('Error deleting image file:', err);
      } else {
        console.log('Image file deleted successfully:', imageToDelete.filePath);
      }
    });

    res.status(200).json({
      success: true,
      message: 'Image deleted successfully',
      serviceDetail,
    });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(400).json({ message: error.message });
  }
});

exports.removeFieldFromWhyChoose = catchAsyncErrors(async (req, res, next) => {
  const { serviceId, fieldId } = req.params;

  try {
    // Find the service by ID and update it by removing the specified field
    const updatedService = await WhyChooseUs.findByIdAndUpdate(
      serviceId,
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

