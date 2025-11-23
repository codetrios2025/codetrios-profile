const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Keyheading = require("../models/keyheadingModel");

// @desc    Get all keyheading entries
exports.getAllkeyheading = catchAsyncErrors(async (req, res, next) => {
    const keyheading = await Keyheading.find();
    res.status(200).json({
        success: true,
        keyheading,
    });
});

// @desc    Create a keyheading entry
exports.createkeyheading = catchAsyncErrors(async (req, res, next) => {
    console.log(req.body);
    const { title,  description } = req.body;

    const newkeyheading = new Keyheading({
        title, description
    });
    const keyheading = await newkeyheading.save();
    res.status(201).json(keyheading);
});

// @desc    Get a single keyheading entry by ID
exports.getkeyheadingById = catchAsyncErrors(async (req, res, next) => {
    const keyheading = await Keyheading.findById(req.params.id);
    if (!keyheading) {
        return next(new ErrorHander(`keyheading entry not found`));
    }
    res.json(keyheading);
});

// @desc    Update a keyheading entry
exports.updatekeyheading = catchAsyncErrors(async (req, res, next) => {
    const { title, description } = req.body;

    const keyheading = await Keyheading.findById(req.params.id);
    if (!keyheading) {
        return next(new ErrorHander(`keyheading entry not found`));
    }

    keyheading.title = title || keyheading.title;
    keyheading.description = description || keyheading.description;
   
  

    const updatedkeyheading = await keyheading.save();
    res.json(updatedkeyheading);
});

// @desc    Delete a keyheading entry
exports.deletekeyheading = catchAsyncErrors(async (req, res, next) => {
    const keyheading = await Keyheading.findById(req.params.id);
    if (!keyheading) {
        return next(new ErrorHander(`keyheading entry not found`));
    }
    await keyheading.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'keyheading entry removed' });
});
