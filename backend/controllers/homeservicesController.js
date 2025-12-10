const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Homeservice = require("../models/homeserviceModel");
const Homeserviceimage = require("../models/homeserviceimageModel")


// // @desc    Get all Homeservice Links

exports.getAllHomeservice = catchAsyncErrors(async (req, res, next) => {
    const homeservice = await Homeservice.find();
    res.status(200).json({
      success: true,
      homeservice,
    });
});

exports.getAllwithChildHomeservice = catchAsyncErrors(async (req, res, next) => {
  const homeservice = await Homeservice.find();
  const homeserviceimage = await Homeserviceimage.find();

  // Merge homeserviceimage into homeservice based on matching title
  const mergedHomeservice = homeservice.map(service => {
      const child = homeserviceimage.filter(image => image.serviceId === service.title);
      return { ...service._doc, child };
  });

  res.status(200).json({
      success: true,
      homeservice: mergedHomeservice,
  });
});
// @desc    Create a whoweoffermain
exports.createHomeservice= catchAsyncErrors(async (req,res,next) =>{
  const { title,description,iconfield,order,link} = req.body;
  const image = req.file ? req.file.filename : null;
 

  const newHomeservice = new Homeservice({
    title,description,order,link,image,iconfield
  });
  const homeservice = await newHomeservice.save();
  res.status(201).json(homeservice);
});
// @desc    Get a single who we offer main by ID
exports.getHomeserviceById = catchAsyncErrors(async (req,res,next)=>{
  const homeservice = await Homeservice.findById(req.params.id);
  if (!homeservice) {
      return next(
          new ErrorHander(`who we offer main not found`)
        );
  }
  res.json(homeservice);
})
// @desc    Update a Home service
exports.updateHomeservice = async (req, res) => {
  const {title,description,iconfield,order,link} = req.body;
  const image = req.file ? req.file.filename : null;
 
  try {
      const homeservice = await Homeservice.findById(req.params.id);
      if (!homeservice) {
          return next(
              new ErrorHander(`who we offer main not found`)
            );
      }

      homeservice.title = title || homeservice.title;
      homeservice.description = description || homeservice.description;
      homeservice.iconfield=iconfield||homeservice.iconfield;
      homeservice.order =order || homeservice.order;
      homeservice.image =image || homeservice.image;
      homeservice.link =link || homeservice.link;

      const updatedHomeservice = await homeservice.save();
      res.json(updatedHomeservice);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a Homeservice
exports.deleteHomeservice = catchAsyncErrors(async (req, res) => {
 
   try {
      const homeservice = await Homeservice.findById(req.params.id);
      if (!homeservice) {
          return next(
              new ErrorHander(`Who we are Link not found`)
            );
      }
      await homeservice.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Who we are removed' });
     
  } catch (err) {
      res.status(500).json({ message:err.message });
  }
});


