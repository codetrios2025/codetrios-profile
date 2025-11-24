const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Jointeams = require("../models/jointeamsModel")
const fs = require('fs');
const path = require('path');

// // @desc    Get all jointeams Links
exports.getAlljointeams = catchAsyncErrors(async (req, res, next) => {
    const jointeams = await Jointeams.find();
    res.status(200).json({
      success: true,
      jointeams,
    });
});

// @desc    Create a jointeams
exports.createjointeams = catchAsyncErrors(async (req,res,next) =>{
    const {title,link,description} = req.body;

    if (!req.files) {
        return next(
            new ErrorHander(`jointeams image is required with Id: ${req.params.id}`)
        );
    }
    const filesArray = req.files.images.map(file => ({
        fileName: file.filename,
        filePath: file.path
    }));

    const newjointeams = new Jointeams({
        //title,link,description,image : `${req.params.module ? `${req.params.module}/` : ''}${image}`,
        title,link,description,image : filesArray,
    });
    const jointeams = await newjointeams.save();
    res.status(201).json(jointeams);
});
// @desc    Get a single jointeams by ID
exports.getjointeamsById = catchAsyncErrors(async (req,res,next)=>{
    const jointeams = await Jointeams.findById(req.params.id);
    if (!jointeams) {
        return next(
            new ErrorHander(`jointeams not found`)
          );
    }
    res.json(jointeams);
})

// @desc    Update a jointeams
exports.updatejointeams = async (req, res) => {
    const {title,link,description} = req.body;
    if (!req.files) {
        return next(
            new ErrorHander(`jointeams image is required with Id: ${req.params.id}`)
        );
    }else{
    const filesArray = req.files.images.map(file => ({
        fileName: file.filename,
        filePath: file.path
    }));
}

    try {
        const jointeams = await Jointeams.findById(req.params.id);
        //console.log('joinTeam==',jointeams)
        if (!jointeams) {
            return next(
                new ErrorHander(`Banner not found`)
              );
        }

        jointeams.title = title || jointeams.title;
        jointeams.link = link || jointeams.link;
        jointeams.description = description || jointeams.description;
        //jointeams.image = filesArray || jointeams.image;

        if (req.files && req.files.images && req.files.images.length) {
            const newFilesArray = req.files.images;
      
            const newFilesData = newFilesArray.map(file => ({
              fileName: file.filename,
              filePath: file.path,
            }));
      
            jointeams.image = [...jointeams.image, ...newFilesData];
          }

        const updatedjointeams = await jointeams.save();
        res.json(updatedjointeams);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Delete a jointeams
exports.deletejointeams = catchAsyncErrors(async (req, res) => {
    try {
        const jointeams = await Jointeams.findById(req.params.id);
        if (!jointeams) {
            return next(
                new ErrorHander(`jointeams Link not found`)
              );
        }
        await jointeams.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'jointeams removed' });
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @desc    Delete image from jointeams

exports.deleteImageFromTeam = async (req, res) => {
    const { teamId } = req.params;
    const { fileName } = req.body; // Assuming the filename is passed in the request body
  
    try {
      const joinTeam = await Jointeams.findById(teamId);
  
      if (!joinTeam) {
        return res.status(404).json({ error: 'Join Team not found' });
      }
  
      const imageIndex = joinTeam.image.findIndex(image => image.fileName === fileName);
  
      if (imageIndex === -1) {
        return res.status(404).json({ error: 'Image not found' });
      }
  
      const imagePath = joinTeam.image[imageIndex].filePath;
  
      // Remove the image from the database array
      joinTeam.image.splice(imageIndex, 1);
      await joinTeam.save();
  
      // Optionally, delete the image file from the filesystem
      fs.unlink(path.join(__dirname, '..', imagePath), (err) => {
        if (err) {
          console.error(`Failed to delete image file: ${err.message}`);
        }
      });
  
      res.status(200).json({ message: 'Image deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
