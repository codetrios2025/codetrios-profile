const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Keyproject = require("../models/keyprojectModel")

// // @desc    Get all Homeservice Links

exports.getAllKeyproject = catchAsyncErrors(async (req, res, next) => {
    const keyproject = await Keyproject.find();
 
    res.status(200).json({
      success: true,
      keyproject,
    });
});
exports.getUrlKeyproject = catchAsyncErrors(async (req, res, next) => {
  console.log(req.params)
  const keyproject = await Keyproject.find(req.params);

  res.status(200).json({
    success: true,
    keyproject,
  });
});
// @desc    Create a whoweoffermain
exports.createKeyproject= catchAsyncErrors(async (req,res,next) =>{
  const { title,link,order,description} = req.body;
  const image = req.files.image ? req.files.image[0].filename : null;
  const innerimage = req.files.innerimage ? req.files.innerimage[0].filename : null;
 
  
  if (!image) {
    return next(
        new ErrorHander(`Social image is required with Id: ${req.params.id}`)
      );
}
  const newKeyproject = new Keyproject({
    title,link,order,image,description,innerimage
  });
  const keyproject = await newKeyproject.save();
  res.status(201).json(keyproject);
});
// @desc    Get a single who we offer main by ID
exports.getKeyprojectById = catchAsyncErrors(async (req,res,next)=>{
  const keyproject = await Keyproject.findById(req.params.id);
  if (!keyproject) {
      return next(
          new ErrorHander(`who we offer main not found`)
        );
  }
  res.json(keyproject);
})
// @desc    Update a Home service
exports.updateKeyproject = async (req, res) => {
  const {title,link,order,description} = req.body;
  const image = req.files.image ? req.files.image[0].filename : null;
  const innerimage = req.files.innerimage ? req.files.innerimage[0].filename : null;
 
    
  try {
      const keyproject = await Keyproject.findById(req.params.id);
      if (!keyproject) {
          return next(
              new ErrorHander(`who we offer main not found`)
            );
      }

      keyproject.title = title || keyproject.title;
      keyproject.link = link || keyproject.link;
      keyproject.image = image || keyproject.image;
      keyproject.innerimage = innerimage || keyproject.innerimage;
      keyproject.description = description || keyproject.description;
      keyproject.order =order || keyproject.order;

      const updatedKeyproject = await keyproject.save();
      res.json(updatedKeyproject);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a Homeservice
exports.deleteKeyproject = catchAsyncErrors(async (req, res) => {
 
   try {
      const keyproject = await Keyproject.findById(req.params.id);
      if (!keyproject) {
          return next(
              new ErrorHander(`Key product not found`)
            );
      }
      await keyproject.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Who we are removed' });
     
  } catch (err) {
      res.status(500).json({ message:err.message });
  }
});


