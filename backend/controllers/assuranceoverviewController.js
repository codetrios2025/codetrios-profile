const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const AssuranceOverview = require("../models/assuranceoverviewModel");
const Customers = require("../models/customersModel")
const Downloads = require("../models/downloadModel");
const Homeserviceimage = require("../models/homeserviceimageModel")
// @desc    Get all AssuranceOverview entries
exports.getAllAssuranceOverview = catchAsyncErrors(async (req, res, next) => {
    const assuranceOverview = await AssuranceOverview.find();
    res.status(200).json({
        success: true,
        assuranceOverview,
    });
});
exports.getAlldataOfAssuranceOverview = catchAsyncErrors(async (req, res, next) => {
    const assuranceOverview = await AssuranceOverview.find();

    // Fetch data from Customers where pageType is 'Assurance'
    const customers = await Customers.find({ pageType: 'Assurance' });

    // Fetch data from Downloads where pageType is 'Assurance'
    const downloads = await Downloads.find({ pageType: 'Assurance' });
    // Fetch data from Service images where 'Assuarnce service'
    const homeserviceimage = await Homeserviceimage.find({ serviceId: 'Assurance Services' });

    res.status(200).json({
        success: true,
        assuranceOverview,
        homeserviceimage,
        customers,
        downloads,
    });
});

// @desc    Create a AssuranceOverview entry
exports.createAssuranceOverview = catchAsyncErrors(async (req, res, next) => {
    const { text, description, order, fields } = req.body;
    const image = req.file ? req.file.filename : null;
    if (!image) {
        return next(
            new ErrorHander(`Social image is required with Id: ${req.params.id}`)
          );
    }
    const newAssuranceOverview = new AssuranceOverview({
        text,  description, order, fields,image
    });
    const assuranceOverview = await newAssuranceOverview.save();
    res.status(201).json(assuranceOverview);
});

// @desc    Get a single WhoWeAre entry by ID
exports.getAssuranceOverviewId = catchAsyncErrors(async (req, res, next) => {
    const assuranceOverview = await AssuranceOverview.findById(req.params.id);
    if (!assuranceOverview) {
        return next(new ErrorHander(`WhoWeAre entry not found`));
    }
    res.json(assuranceOverview);
});

// @desc    Update a AssuranceOverview entry
exports.updateAssuranceOverview = catchAsyncErrors(async (req, res, next) => {
    const { text,description, order, fields } = req.body;
    const Image = req.file ? req.file.filename : null;

    const assuranceOverview = await AssuranceOverview.findById(req.params.id);
    if (!assuranceOverview) {
        return next(new ErrorHander(`assurance Overview entry not found`));
    }

    assuranceOverview.text = text || assuranceOverview.text;
    assuranceOverview.description = description || assuranceOverview.description;
    assuranceOverview.order = order !== undefined ? order : assuranceOverview.order;
    assuranceOverview.fields = fields || assuranceOverview.fields;
    assuranceOverview.image = Image || assuranceOverview.image;

    const updatedAssuranceOverview = await assuranceOverview.save();
    res.json(updatedAssuranceOverview);
});

// @desc    Delete a assuranceOverview entry
exports.deleteAssuranceOverview = catchAsyncErrors(async (req, res, next) => {
    const assuranceOverview = await AssuranceOverview.findById(req.params.id);
    if (!assuranceOverview) {
        return next(new ErrorHander(`Assurance Overview entry not found`));
    }
    await assuranceOverview.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Assurance Overview entry removed' });
});
