const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Whoweoffermain = require("../models/whoweoffermainModel")

// // @desc    Get all whoweoffermain Links

exports.getAllWhoweoffermain = catchAsyncErrors(async (req, res, next) => {
    const whoweoffermain = await Whoweoffermain.find();
    res.status(200).json({
      success: true,
      whoweoffermain,
    });
});

// @desc    Create a whoweoffermain
exports.createWhoweoffermain= catchAsyncErrors(async (req,res,next) =>{
  const { title,description} = req.body;
 
  const newWhoweoffermain = new Whoweoffermain({
    title,description
  });
  const whoweoffermain = await newWhoweoffermain.save();
  res.status(201).json(whoweoffermain);
});
// @desc    Get a single who we offer main by ID
exports.getWhoweoffermainById = catchAsyncErrors(async (req,res,next)=>{
  const whoweoffermain = await Whoweoffermain.findById(req.params.id);
  if (!whoweoffermain) {
      return next(
          new ErrorHander(`who we offer main not found`)
        );
  }
  res.json(whoweoffermain);
})
// @desc    Update a who we offer main
exports.updateWhoweoffermain = async (req, res) => {
  const {title,description} = req.body;

  try {
      const whoweoffermain = await Whoweoffermain.findById(req.params.id);
      if (!whoweoffermain) {
          return next(
              new ErrorHander(`who we offer main not found`)
            );
      }

      whoweoffermain.title = title || whoweoffermain.title;
      whoweoffermain.description = description || whoweoffermain.description;
     

      const updatedWhoweoffermain = await whoweoffermain.save();
      res.json(updatedWhoweoffermain);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a Whoweare
exports.deleteWhoweoffermain = catchAsyncErrors(async (req, res) => {
 
   try {
      const whoweoffermain = await Whoweoffermain.findById(req.params.id);
      if (!whoweoffermain) {
          return next(
              new ErrorHander(`Who we are Link not found`)
            );
      }
      await Whoweoffermain.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Who we are removed' });
     
  } catch (err) {
      res.status(500).json({ message:err.message });
  }
});


