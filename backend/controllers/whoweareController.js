const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Whoweare = require("../models/whoweareModel");

// @desc    Get all WhoWeAre entries
exports.getAllWhoweare = catchAsyncErrors(async (req, res, next) => {
    const whoweare = await Whoweare.find();
    res.status(200).json({
        success: true,
        whoweare,
    });
});

// @desc    Create a WhoWeAre entry
exports.createWhoweare = catchAsyncErrors(async (req, res, next) => {
    const { text, link, description, order, fields } = req.body;

    const newWhoweare = new Whoweare({
        text, link, description, order, fields
    });
    const whoweare = await newWhoweare.save();
    res.status(201).json(whoweare);
});

// @desc    Get a single WhoWeAre entry by ID
exports.getWhoweareById = catchAsyncErrors(async (req, res, next) => {
    const whoweare = await Whoweare.findById(req.params.id);
    if (!whoweare) {
        return next(new ErrorHander(`WhoWeAre entry not found`));
    }
    res.json(whoweare);
});

// @desc    Update a WhoWeAre entry
exports.updateWhoweare = catchAsyncErrors(async (req, res, next) => {
    const { text, link, description, order, fields } = req.body;

    const whoweare = await Whoweare.findById(req.params.id);
    if (!whoweare) {
        return next(new ErrorHander(`WhoWeAre entry not found`));
    }

    whoweare.text = text || whoweare.text;
    whoweare.link = link || whoweare.link;
    whoweare.description = description || whoweare.description;
    whoweare.order = order !== undefined ? order : whoweare.order;
    whoweare.fields = fields || whoweare.fields;

    const updatedWhoweare = await whoweare.save();
    res.json(updatedWhoweare);
});

// @desc    Delete a WhoWeAre entry
exports.deleteWhoweare = catchAsyncErrors(async (req, res, next) => {
    const whoweare = await Whoweare.findById(req.params.id);
    if (!whoweare) {
        return next(new ErrorHander(`WhoWeAre entry not found`));
    }
    await Whoweare.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'WhoWeAre entry removed' });
});
