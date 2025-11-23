const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ProjectService = require("../models/projectserviceModel");
const IconService = require("../models/iconModel");
const fs = require('fs');
const path = require('path');

// @desc Get all ProjectService Links
exports.getAllprojectservice = catchAsyncErrors(async (req, res, next) => {
  const projectservice = await ProjectService.find();
  res.status(200).json({
    success: true,
    projectservice,
  });
});

// @desc Create a ProjectService
exports.createprojectservice = catchAsyncErrors(async (req, res, next) => {
  const { title, link, description } = req.body;

  if (!req.files || !req.files.images) {
    return next(
      new ErrorHander('ProjectService image is required')
    );
  }

  const filesArray = req.files.images.map(file => ({
    fileName: file.filename,
    filePath: file.path
  }));

  const newProjectService = new ProjectService({
    title,
    link,
    description,
    image: filesArray,
  });

  const projectservice = await newProjectService.save();
  res.status(201).json(projectservice);
});

// @desc Get a single projectservice by ID
exports.getprojectserviceById = catchAsyncErrors(async (req, res, next) => {
  const projectservice = await ProjectService.findById(req.params.id);
  if (!projectservice) {
    return next(new ErrorHander('ProjectService not found'));
  }
  res.json(projectservice);
});

// @desc Update a projectservice
exports.updateprojectservice = catchAsyncErrors(async (req, res, next) => {
  const { title, link, description } = req.body;

  let projectservice = await ProjectService.findById(req.params.id);
  if (!projectservice) {
    return next(new ErrorHander('ProjectService not found'));
  }

  if (req.files && req.files.images && req.files.images.length) {
    const filesArray = req.files.images.map(file => ({
      fileName: file.filename,
      filePath: file.path
    }));
    projectservice.image = [...projectservice.image, ...filesArray];
  }

  projectservice.title = title || projectservice.title;
  projectservice.link = link || projectservice.link;
  projectservice.description = description || projectservice.description;

  const updatedprojectservice = await projectservice.save();
  res.json(updatedprojectservice);
});

// @desc Delete a projectservice
exports.deleteprojectservice = catchAsyncErrors(async (req, res, next) => {
  const projectservice = await ProjectService.findById(req.params.id);
  if (!projectservice) {
    return next(new ErrorHander('ProjectService Link not found'));
  }

  await projectservice.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: 'ProjectService removed' });
});

// @desc Delete image from projectservice
exports.deleteImageFromTeam = catchAsyncErrors(async (req, res, next) => {
  const { serviceId } = req.params;
  const { fileName } = req.body; // Assuming the filename is passed in the request body

  const ServiceImg = await ProjectService.findById(serviceId);

  if (!ServiceImg) {
    return res.status(404).json({ error: 'Project Service not found' });
  }

  const imageIndex = ServiceImg.image.findIndex(image => image.fileName === fileName);

  if (imageIndex === -1) {
    return res.status(404).json({ error: 'Image not found' });
  }

  const imagePath = ServiceImg.image[imageIndex].filePath;

  // Remove the image from the database array
  ServiceImg.image.splice(imageIndex, 1);
  await ServiceImg.save();

  // Optionally, delete the image file from the filesystem
  fs.unlink(path.join(__dirname, '..', imagePath), (err) => {
    if (err) {
      console.error(`Failed to delete image file: ${err.message}`);
    }
  });

  res.status(200).json({ message: 'Image deleted successfully' });
});

