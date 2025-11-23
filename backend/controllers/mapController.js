const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Map = require("../models/mapModel")

// // @desc    Get all Map Links

exports.getAllMap = catchAsyncErrors(async (req, res, next) => {
    const maps = await Map.find();
    res.status(200).json({
      success: true,
      maps,
    });
});

// @desc    Create a map
exports.createMap= catchAsyncErrors(async (req,res,next) =>{
  const { title,description,latitude,longitude} = req.body;
  
  const newMap = new Map({
    title,description,latitude,longitude
  });
  const SaveMap = await newMap.save();
  res.status(201).json(SaveMap);
});
// @desc    Get a single who we offer main by ID
exports.getMapById = catchAsyncErrors(async (req,res,next)=>{
  const mapData = await Map.findById(req.params.id);
  if (!mapData) {
      return next(
          new ErrorHander(`Map Location not found`)
        );
  }
  res.json(mapData);
})
// @desc    Update a who we offer main
exports.updateMap = async (req, res) => {
  const {title,description,latitude,longitude} = req.body;

  try {
      const Mapdata = await Map.findById(req.params.id);
      if (!Mapdata) {
          return next(
              new ErrorHander(`who we offer main not found`)
            );
      }

      Mapdata.title = title || Mapdata.title;
      Mapdata.latitude = latitude || Mapdata.latitude;
      Mapdata.longitude = longitude || Mapdata.longitude;
      Mapdata.description = description || Mapdata.description;
     

      const updatedMap = await Mapdata.save();
      res.json(updatedMap);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a Whoweare
exports.deleteMap = catchAsyncErrors(async (req, res) => {
 
   try {
      const Mapdata = await Map.findById(req.params.id);
      if (!Mapdata) {
          return next(
              new ErrorHander(`Who we are Link not found`)
            );
      }
      await Mapdata.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Who we are removed' });
     
  } catch (err) {
      res.status(500).json({ message:err.message });
  }
});


