const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Carrerhome = require("../models/carrerhomeModel")
const fs = require('fs');
const path = require('path');

// // @desc    Get all carrerhome Links
exports.getAllcarrerhome = catchAsyncErrors(async (req, res, next) => {
    const carrerhome = await Carrerhome.find();
    res.status(200).json({
      success: true,
      carrerhome,
    });
});

// @desc    Create a carrerhome
exports.createcarrerhome = catchAsyncErrors(async (req,res,next) =>{
    const {title,link,description} = req.body;

    if (!req.files) {
        return next(
            new ErrorHander(`carrerhome image is required with Id: ${req.params.id}`)
        );
    }
    const filesArray = req.files.images.map(file => ({
        fileName: file.filename,
        filePath: file.path
    }));

    const newcarrerhome = new Carrerhome({
        //title,link,description,image : `${req.params.module ? `${req.params.module}/` : ''}${image}`,
        title,link,description,image : filesArray,
    });
    const carrerhome = await newcarrerhome.save();
    res.status(201).json(carrerhome);
});
// @desc    Get a single carrerhome by ID
exports.getcarrerhomeById = catchAsyncErrors(async (req,res,next)=>{
    const carrerhome = await Carrerhome.findById(req.params.id);
    if (!carrerhome) {
        return next(
            new ErrorHander(`carrerhome not found`)
          );
    }
    res.json(carrerhome);
})

// @desc    Update a carrerhome
exports.updatecarrerhome = async (req, res) => {
    const {title,link,description} = req.body;
    console.log(req.files)
    if (!req.files) {
        return next(
            new ErrorHander(`carrerhome image is required with Id: ${req.params.id}`)
        );
    }else{
      if(req.files.length>0){
        const filesArray = req.files.images.map(file => ({
          fileName: file.filename,
          filePath: file.path
      }));
      }
      
    }

    try {
        const carrerhome = await Carrerhome.findById(req.params.id);
       if (!carrerhome) {
            return next(
                new ErrorHander(`Banner not found`)
              );
        }

        carrerhome.title = title || carrerhome.title;
        carrerhome.link = link || carrerhome.link;
        carrerhome.description = description || carrerhome.description;
      
        if (req.files && req.files.images && req.files.images.length) {
          const newFilesArray = req.files.images;
    
          const newFilesData = newFilesArray.map(file => ({
            fileName: file.filename,
            filePath: file.path,
          }));
    
          carrerhome.image = [...carrerhome.image, ...newFilesData];
        }

        const updatedcarrerhome = await carrerhome.save();
        res.json(updatedcarrerhome);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Delete a carrerhome
exports.deletecarrerhome = catchAsyncErrors(async (req, res) => {
    try {
        const carrerhome = await Carrerhome.findById(req.params.id);
        if (!carrerhome) {
            return next(
                new ErrorHander(`carrer home Link not found`)
              );
        }
        await carrerhome.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'carrer home removed' });
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @desc    Delete image from carrerhome

exports.deleteImageFromTeam = async (req, res) => {
    const { teamId } = req.params;
    const { fileName } = req.body; // Assuming the filename is passed in the request body
  
    try {
      const carrerhome = await Carrerhome.findById(teamId);
  
      if (!carrerhome) {
        return res.status(404).json({ error: 'carrer home  not found' });
      }
  
      const imageIndex = carrerhome.image.findIndex(image => image.fileName === fileName);
  
      if (imageIndex === -1) {
        return res.status(404).json({ error: 'Image not found' });
      }
  
      const imagePath = carrerhome.image[imageIndex].filePath;
  
      // Remove the image from the database array
      carrerhome.image.splice(imageIndex, 1);
      await carrerhome.save();
  
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
