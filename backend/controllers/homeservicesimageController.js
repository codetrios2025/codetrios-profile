const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Homeserviceimage = require("../models/homeserviceimageModel")

// // @desc    Get all Homeservice Links

exports.getAllHomeserviceimage = catchAsyncErrors(async (req, res, next) => {
    const homeserviceimage = await Homeserviceimage.find();
 
    res.status(200).json({
      success: true,
      homeserviceimage,
    });
});
// Get data by services
exports.getAllHomeserviceimageByName = catchAsyncErrors(async (req, res, next) => {
 
  const { servicesType } = req.query; // Get the serviceId from the query parameters
  
    let filter = {};
    if (servicesType) {
        filter.serviceId = servicesType; // Add filtering by serviceId if provided
    }

  const homeserviceimage = await Homeserviceimage.find(filter);

  res.status(200).json({
    success: true,
    homeserviceimage,
  });
});
// @desc    Create a whoweoffermain
exports.createHomeserviceimage= catchAsyncErrors(async (req,res,next) =>{
  const { text,link,order,serviceId,description} = req.body;
  const image = req.files.image ? req.files.image[0].filename : null;
  const innerimage = req.files.innerimage ? req.files.innerimage[0].filename : null;
  const imageicon = req.files.imageicon ? req.files.imageicon[0].filename : null;
 
  
  if (!image) {
    return next(
        new ErrorHander(`Services image is required with Id: ${req.params.id}`)
      );
}
  const newHomeserviceimage = new Homeserviceimage({
    text,link,order,image,serviceId,innerimage,description,imageicon
  });
  const homeserviceimage = await newHomeserviceimage.save();
  res.status(201).json(homeserviceimage);
});
// @desc    Get a single who we offer main by ID
exports.getHomeserviceimageById = catchAsyncErrors(async (req,res,next)=>{
  const homeserviceimage = await Homeserviceimage.findById(req.params.id);
  if (!homeserviceimage) {
      return next(
          new ErrorHander(`who we offer main not found`)
        );
  }
  res.json(homeserviceimage);
})
// @desc    Update a Home service
exports.updateHomeserviceimage = async (req, res) => {
  const {text,link,order,serviceId,description} = req.body;
  const image = req.files.image ? req.files.image[0].filename : null;
  const innerimage = req.files.innerimage ? req.files.innerimage[0].filename : null;
  const imageicon = req.files.imageicon ? req.files.imageicon[0].filename : null;
 
    
  try {
      const homeserviceimage = await Homeserviceimage.findById(req.params.id);
      if (!homeserviceimage) {
          return next(
              new ErrorHander(`who we offer main not found`)
            );
      }

      homeserviceimage.text = text || homeserviceimage.text;
      homeserviceimage.description = description || homeserviceimage.description;
      homeserviceimage.link = link || homeserviceimage.link;
      homeserviceimage.image = image || homeserviceimage.image;
      homeserviceimage.innerimage = innerimage || homeserviceimage.innerimage;
      homeserviceimage.imageicon = imageicon || homeserviceimage.imageicon;
      homeserviceimage.serviceId = serviceId || homeserviceimage.serviceId;
      homeserviceimage.order =order || homeserviceimage.order;

      const updatedHomeserviceimage = await homeserviceimage.save();
      res.json(updatedHomeserviceimage);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a Homeservice
exports.deleteHomeserviceimage = catchAsyncErrors(async (req, res) => {
 
   try {
      const homeserviceimage = await Homeserviceimage.findById(req.params.id);
      if (!homeserviceimage) {
          return next(
              new ErrorHander(`Who we are Link not found`)
            );
      }
      await homeserviceimage.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Who we are removed' });
     
  } catch (err) {
      res.status(500).json({ message:err.message });
  }
});


