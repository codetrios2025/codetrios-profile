const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Video = require("../models/videoModel")

// // @desc    Get all Video 

exports.getAllvideo = catchAsyncErrors(async (req, res, next) => {
    const video = await Video.find();
 
    res.status(200).json({
      success: true,
      video,
    });
});

// @desc    Create a Video
exports.createvideo= catchAsyncErrors(async (req,res,next) =>{
    const {  title, pageType, description} = req.body;
   
  const video = req.files.video ? req.files.video[0].filename : null;
 
  if (!video) {
    return next(new Error(`video file is required`));
  }

  

  const newVideo = new Video({
    title,
    pageType,
    description,
    video
  });

  const videos = await newVideo.save();
  res.status(201).json(videos);
  });
  // @desc    Get a single Video main by ID
exports.getvideoById = catchAsyncErrors(async (req,res,next)=>{
  const video = await Video.findById(req.params.id);
  if (!video) {
      return next(
          new ErrorHander(`who we offer main not found`)
        );
  }
  res.json(video);
})
// @desc    Update a Home service
exports.updatevideo = async (req, res) => {
  const { title, pageType, description } = req.body;
  const video = req.files.video ? req.files.video[0].filename : null;
  
  try {
      const video = await Video.findById(req.params.id);
      if (!video) {
          return next(
              new ErrorHander(`who we offer main not found`)
            );
      }
     
      video.title = title || video.title;
      video.video = video || video.video;
      video.pageType = pageType || video.pageType;
      video.description = description || video.description;
     
      const updatedVideo = await video.save();
      res.json(updatedVideo);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// @desc    Delete a video
exports.deletevideo = catchAsyncErrors(async (req, res) => {
 
   try {
      const video = await Video.findById(req.params.id);
      if (!video) {
          return next(
              new ErrorHander(`video not found`)
            );
      }
      await video.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'video are removed' });
     
  } catch (err) {
      res.status(500).json({ message:err.message });
  }
});


