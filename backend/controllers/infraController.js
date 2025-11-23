const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Infra = require("../models/InfraModel")

// // @desc    Get all Homeservice Links

exports.getAllinfra = catchAsyncErrors(async (req, res, next) => {
    const infra = await Infra.find();
 
    res.status(200).json({
      success: true,
      infra,
    });
});

// @desc    Create a whoweoffermain
exports.createinfra= catchAsyncErrors(async (req,res,next) =>{
  const { title,link,order,description} = req.body;
  const image = req.file ? req.file.filename : null;
  
//   if (!image) {
//     return next(
//         new ErrorHander(`Social image is required with Id: ${req.params.id}`)
//       );
// }
  const newinfra= new Infra({
    title,link,order,image,description
  });
  const infra = await newinfra.save();
  res.status(201).json(infra);
});
// @desc    Get a single who we offer main by ID
exports.getinfraById = catchAsyncErrors(async (req,res,next)=>{
  const infra = await Infra.findById(req.params.id);
  if (!infra) {
      return next(
          new ErrorHander(`who we offer main not found`)
        );
  }
  res.json(infra);
})
// @desc    Update a Home service
exports.updateinfra = async (req, res) => {
  const {title,link,order,description} = req.body;
  const image = req.file ? req.file.filename : null;
    
    
  try {
      const infra = await Infra.findById(req.params.id);
      if (!infra) {
          return next(
              new ErrorHander(`who we offer main not found`)
            );
      }

      infra.title = title || infra.title;
      infra.link = link || infra.link;
      infra.image = image || infra.image;
      infra.description = description || infra.description;
      infra.order =order || infra.order;

      const updatedinfra = await infra.save();
      res.json(updatedinfra);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a Homeservice
exports.deleteinfra = catchAsyncErrors(async (req, res) => {
 
   try {
      const infra = await Infra.findById(req.params.id);
      if (!infra) {
          return next(
              new ErrorHander(`Key product not found`)
            );
      }
      await infra.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Who we are removed' });
     
  } catch (err) {
      res.status(500).json({ message:err.message });
  }
});


