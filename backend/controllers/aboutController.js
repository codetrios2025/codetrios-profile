const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const About = require("../models/aboutModel")

// // @desc    Get all Homeservice Links

exports.getAllabout = catchAsyncErrors(async (req, res, next) => {
    const about = await About.find();
 
    res.status(200).json({
      success: true,
      about,
    });
});

// @desc    Create a whoweoffermain
exports.createabout= catchAsyncErrors(async (req,res,next) =>{
  const { title,link,order,description,description1} = req.body;
  const image1 = req.files.image1 ? req.files.image1[0].filename : null;
  const image2 = req.files.image2 ? req.files.image2[0].filename : null;
  const image3 = req.files.image3 ? req.files.image3[0].filename : null;
 
  
  if (!image1) {
    return next(
        new ErrorHander(`Social image is required with Id: ${req.params.id}`)
      );
}
  const newAbout = new About({
    title,link,order,image1,image2,image3,description
  });
  const about = await newAbout.save();
  res.status(201).json(about);
});
// @desc    Get a single who we offer main by ID
exports.getaboutById = catchAsyncErrors(async (req,res,next)=>{
  const about = await About.findById(req.params.id);
  if (!about) {
      return next(
          new ErrorHander(`who we offer main not found`)
        );
  }
  res.json(about);
})
// @desc    Update a Home service
exports.updateabout = async (req, res) => {
  // const {title,link,order,description} = req.body;
  // const image = req.files.image ? req.files.image[0].filename : null;
  // const innerimage = req.files.innerimage ? req.files.innerimage[0].filename : null;
  const { title,link,order,description,description1} = req.body;
  const image1 = req.files.image1 ? req.files.image1[0].filename : null;
  const image2 = req.files.image2 ? req.files.image2[0].filename : null;
  const image3 = req.files.image3 ? req.files.image3[0].filename : null;
 
  
    
  try {
      const about = await About.findById(req.params.id);
      if (!about) {
          return next(
              new ErrorHander(`who we offer main not found`)
            );
      }

      about.title = title || about.title;
      about.link = link || about.link;
      about.image1 = image1 || about.image1;
      about.image2 = image2 || about.image2;
      about.image3 = image3 || about.image3;
      about.description = description || about.description;
      about.description1 = description1 || about.description1;
      about.order =order || about.order;

      const updatedabout = await about.save();
      res.json(updatedabout);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a Homeservice
exports.deleteabout = catchAsyncErrors(async (req, res) => {
 
   try {
      const about = await About.findById(req.params.id);
      if (!about) {
          return next(
              new ErrorHander(`Key product not found`)
            );
      }
      await about.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Who we are removed' });
     
  } catch (err) {
      res.status(500).json({ message:err.message });
  }
});


