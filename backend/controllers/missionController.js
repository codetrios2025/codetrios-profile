const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Mission = require("../models/missionModel")

// // @desc    Get all Mission Links

exports.getAllMission = catchAsyncErrors(async (req, res, next) => {
    const mission = await Mission.find();
 
    res.status(200).json({
      success: true,
      mission,
    });
});

// @desc    Create a Mission
exports.createMission= catchAsyncErrors(async (req,res,next) =>{
  const { title,link,order,description} = req.body;
    const backgroundimage = req.files.backgroundimage ? req.files.backgroundimage[0].filename : null;
  const icon = req.files.icon ? req.files.icon[0].filename : null;

 
  // Optional: Check if the required files are present
  if (!backgroundimage || !icon) {
    return next(new ErrorHander(`Background image and icon are required`, 400));
  }


// }
  const newMission = new Mission({
    title,link,order,backgroundimage,description,icon
  });
  const mission = await newMission.save();
  res.status(201).json(mission);
});
// @desc    Get a single Mission main by ID
exports.getMissionById = catchAsyncErrors(async (req,res,next)=>{
  const mission = await Mission.findById(req.params.id);
  if (!mission) {
      return next(
          new ErrorHander(`Mission & Vision not found`)
        );
  }
  res.json(mission);
})
// @desc    Update a Mission
exports.updateMission = async (req, res) => {
  const { title,link,order,description} = req.body;
  const backgroundimage = req.files.backgroundimage ? req.files.backgroundimage[0].filename : null;
const icon = req.files.icon ? req.files.icon[0].filename : null;


    
  try {
      const mission = await Mission.findById(req.params.id);
      if (!mission) {
          return next(
              new ErrorHander(`who we offer main not found`)
            );
      }

      mission.title = title || mission.title;
      mission.link = link || mission.link;
      mission.backgroundimage = backgroundimage || mission.backgroundimage;
      mission.icon = icon || mission.icon;
      mission.description = description || mission.description;
      mission.order =order || mission.order;

      const updatedMission = await mission.save();
      res.json(updatedMission);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a Mission
exports.deleteMission = catchAsyncErrors(async (req, res) => {
 
   try {
      const mission = await Mission.findById(req.params.id);
      if (!mission) {
          return next(
              new ErrorHander(`Key product not found`)
            );
      }
      await mission.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Who we are removed' });
     
  } catch (err) {
      res.status(500).json({ message:err.message });
  }
});


