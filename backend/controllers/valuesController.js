const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Values = require("../models/valuesModel")

// // @desc    Get all Homeservice Links

exports.getAllvalues = catchAsyncErrors(async (req, res, next) => {
    const values = await Values.find();
 
    res.status(200).json({
      success: true,
      values,
    });
});
exports.getByvaluesTypevalues = catchAsyncErrors(async (req, res, next) => {
  const { valueType } = req.query; // Get the positionType from the query parameters

  let filter = {};
  if (valueType) {
      filter.valueType = valueType; // Add filtering by positionType if provided
  }

  const values = await Values.find(filter);
  
  res.status(200).json({
    success: true,
    values,
  });
});
// @desc    Create a whoweoffermain
exports.createvalues= catchAsyncErrors(async (req,res,next) =>{
  const { title,link,order,description,valueType,} = req.body;
  const image = req.file ? req.file.filename : null;
  
//   if (!image) {
//     return next(
//         new ErrorHander(`Social image is required with Id: ${req.params.id}`)
//       );
// }
  const newValues= new Values({
    title,link,order,image,description,valueType
  });
  const values = await newValues.save();
  res.status(201).json(values);
});
// @desc    Get a single who we offer main by ID
exports.getvaluesById = catchAsyncErrors(async (req,res,next)=>{
  const values = await Values.findById(req.params.id);
  if (!values) {
      return next(
          new ErrorHander(`who we offer main not found`)
        );
  }
  res.json(values);
})
// @desc    Update a Home service
exports.updatevalues = async (req, res) => {
  const {title,link,order,valueType,description} = req.body;
  console.log(req.body);
  const image = req.file ? req.file.filename : null;
    
    
  try {
      const values = await Values.findById(req.params.id);
      if (!values) {
          return next(
              new ErrorHander(`Values main not found`)
            );
      }

      values.title = title || values.title;
      values.link = link || values.link;
      values.valueType =valueType || values.valueType
      values.image = image || values.image;
      values.description = description || values.description;
      values.order =order || values.order;

      const updatedvalues = await values.save();
      res.json(updatedvalues);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a Homeservice
exports.deletevalues = catchAsyncErrors(async (req, res) => {
 
   try {
      const values = await Values.findById(req.params.id);
      if (!values) {
          return next(
              new ErrorHander(`Key product not found`)
            );
      }
      await values.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Who we are removed' });
     
  } catch (err) {
      res.status(500).json({ message:err.message });
  }
});


