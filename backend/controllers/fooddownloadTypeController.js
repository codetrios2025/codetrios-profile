const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const FoodDownloadType = require("../models/fooddownloadTypeModel");


// // @desc    Get all DownloadType Links

exports.getAllDownloadType = catchAsyncErrors(async (req, res, next) => {
    const DownloadTypes = await FoodDownloadType.find();
    res.status(200).json({
      success: true,
      DownloadTypes,
    });
});



// @desc    Create a Download Types
exports.createDownloadType= catchAsyncErrors(async (req,res,next) =>{
    const { title,order ,pageType} = req.body;

     if (!title) {
      return next(new ErrorHander("Title is required", 400));
    }
  
    const newDownloadType = new FoodDownloadType({ title,order ,pageType});
    const savedDownloadType = await newDownloadType.save();
  
    res.status(201).json({
      success: true,
      data: savedDownloadType,
    });
  });
// @desc    Get a single Download Types main by ID
exports.getDownloadTypeById = catchAsyncErrors(async (req,res,next)=>{
  const DownloadTypes = await FoodDownloadType.findById(req.params.id);
  if (!DownloadTypes) {
      return next(
          new ErrorHander(`Download Types main not found`)
        );
  }
  res.json(DownloadTypes);
})
exports.getAllDownloadTypebyTitle = catchAsyncErrors(async (req, res, next) => {
 
  const DownloadTypes= await FoodDownloadType.find(req.query);
  res.status(200).json({
      success: true,
      DownloadTypes,
  });
});
// @desc    Update a Download Type
exports.updateDownloadType = async (req, res) => {
  const {title,order,pageType} = req.body;
 
  try {
      const DownloadTypes = await FoodDownloadType.findById(req.params.id);
      if (!DownloadTypes) {
          return next(
              new ErrorHander(`Download Types main not found`)
            );
      }

      DownloadTypes.title = title || DownloadTypes.title;
      DownloadTypes.order = order || DownloadTypes.order;
      DownloadTypes.pageType = pageType || DownloadTypes.pageType;
    
      const updatedDownloadTypes = await DownloadTypes.save();
      res.json(updatedDownloadTypes);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a DownloadTypes
exports.deleteDownloadType = catchAsyncErrors(async (req, res) => {
 
   try {
      const DownloadTypes = await FoodDownloadType.findById(req.params.id);
      if (!DownloadTypes) {
          return next(
              new ErrorHander(`Download type Link not found`)
            );
      }
      await DownloadTypes.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Download type removed' });
     
  } catch (err) {
      res.status(500).json({ message:err.message });
  }
});


