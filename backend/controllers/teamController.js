const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Team = require("../models/teamModel")

// // @desc    Get all team Links
// exports.getAllteam = catchAsyncErrors(async (req, res, next) => {
//     const teams = await Team.find();
//     res.status(200).json({
//       success: true,
//       teams,
//     });
// });
exports.getAllteam = catchAsyncErrors(async (req, res, next) => {
    const { positionType } = req.query; // Get the positionType from the query parameters

    let filter = {};
    if (positionType) {
        filter.positionType = positionType; // Add filtering by positionType if provided
    }

    const teams = await Team.find(filter);
   
    res.status(200).json({
      success: true,
      teams,
    });
});

// @desc    Create a team
exports.createteam = catchAsyncErrors(async (req,res,next) =>{
   
    const {name,link,position,positionType,description,order} = req.body;
    const image = req.file ? req.file.filename : null;
    
    // console.log(req)    // const image = req.file ? req.file.fileName : null;
    if (!image) {
        return next(
            new ErrorHander(`team image is required with Id: ${req.params.id}`)
          );
    }
    const newteam = new Team({
        name,link,position,positionType,description,order,image
    });
    const team = await newteam.save();
    res.status(201).json(team);
});
// @desc    Get a single team by ID
exports.getteamById = catchAsyncErrors(async (req,res,next)=>{
    const team = await Team.findById(req.params.id);
    if (!team) {
        return next(
            new ErrorHander(`team not found`)
          );
    }
    res.json(team);
})

// @desc    Update a team
exports.updateteam = async (req, res) => {
    console.log(req.body)
    const {name,link,position,positionType,description,order} = req.body;
    const image = req.file ? req.file.filename : null;
    // if (!image) {
    //     return next(
    //         new ErrorHander(`who we offer main not found`)
    //       );
    // }

    try {
        const team = await Team.findById(req.params.id);
        if (!team) {
            return next(
                new ErrorHander(`Banner not found`)
              );
        }

        team.name = name || team.name;
        team.link = link || team.link;
        team.position = position || team.position;
        team.positionType = positionType || team.positionType;
        team.description = description || team.description;
        team.order = order !== undefined ? order : team.order;
        team.image = image || team.image;

        const updatedteam = await team.save();
        res.json(updatedteam);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Delete a team
exports.deleteteam = catchAsyncErrors(async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (!team) {
            return next(
                new ErrorHander(`team Link not found`)
              );
        }
        await Team.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'team removed' });
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

