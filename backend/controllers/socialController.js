const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Social = require("../models/socialModel")

// // @desc    Get all Social Links
exports.getAllSocial = catchAsyncErrors(async (req, res, next) => {
    const socials = await Social.find();
    res.status(200).json({
      success: true,
      socials,
    });
});

// @desc    Create a Social
exports.createSocial = catchAsyncErrors(async (req,res,next) =>{
    const { name, url, order ,image} = req.body;
// const image = req.file ? req.file.fileName : null;
    if (!image) {
        return next(
            new ErrorHander(`Social image is required with Id: ${req.params.id}`)
          );
    }
    const newSocial = new Social({
        name, url, order,image
    });
    const social = await newSocial.save();
    res.status(201).json(social);
});
// @desc    Get a single social by ID
exports.getSocialById = catchAsyncErrors(async (req,res,next)=>{
    const social = await Social.findById(req.params.id);
    if (!social) {
        return next(
            new ErrorHander(`Social not found`)
          );
    }
    res.json(social);
})

// @desc    Update a social
exports.updateSocial = async (req, res) => {
    const {  name, url, order,image} = req.body;
    const socialImage = req.file ? req.file.filename : null;

    try {
        const social = await Social.findById(req.params.id);
        if (!social) {
            return next(
                new ErrorHander(`Banner not found`)
              );
        }

        social.name = name || social.name;
        social.url = url || social.url;
        social.order = order !== undefined ? order : social.order;
        social.image = image || social.image;

        const updatedSocial = await social.save();
        res.json(updatedSocial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Delete a Social
exports.deleteSocial = catchAsyncErrors(async (req, res) => {
    try {
        const social = await Social.findById(req.params.id);
        if (!social) {
            return next(
                new ErrorHander(`Social Link not found`)
              );
        }
        await Social.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'Social removed' });
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

