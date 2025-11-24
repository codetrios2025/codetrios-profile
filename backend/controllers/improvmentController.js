const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Improvment = require("../models/improvmentModel")

// // @desc    Get all improvment Links
exports.getAllimprovment = catchAsyncErrors(async (req, res, next) => {
    const improvments = await Improvment.find();
    res.status(200).json({
      success: true,
      improvments,
    });
});

// @desc    Create a improvment
exports.createimprovment = catchAsyncErrors(async (req,res,next) =>{
   
    const {title,description,order} = req.body;
    const image = req.file ? req.file.filename : null;
    
    // console.log(req)    // const image = req.file ? req.file.fileName : null;
    if (!image) {
        return next(
            new ErrorHander(`improvment image is required with Id: ${req.params.id}`)
          );
    }
    const newimprovment = new Improvment({
        title,description,order,image: `${req.params.module ? `${req.params.module}/` : ''}${image}`
    });
    const improvment = await newimprovment.save();
    res.status(201).json(improvment);
});
// @desc    Get a single improvment by ID
exports.getimprovmentById = catchAsyncErrors(async (req,res,next)=>{
    const improvment = await Improvment.findById(req.params.id);
    if (!improvment) {
        return next(
            new ErrorHander(`improvment not found`)
          );
    }
    res.json(improvment);
})

// @desc    Update a improvment
exports.updateimprovment = async (req, res) => {
    const {title,description,order} = req.body;
    const image = req.file ? req.file.filename : null;
    if (!image) {
        return next(
            new ErrorHander(`who we offer main not found`)
          );
    }

    try {
        const improvment = await Improvment.findById(req.params.id);
        if (!improvment) {
            return next(
                new ErrorHander(`Banner not found`)
              );
        }

        improvment.title = title || improvment.title;
        improvment.description = description || improvment.description;
        improvment.order = order  || improvment.order;
        improvment.image = image || improvment.image;

        const updatedimprovment = await improvment.save();
        res.json(updatedimprovment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc    Delete a improvment
exports.deleteimprovment = catchAsyncErrors(async (req, res) => {
    try {
        const improvment = await Improvment.findById(req.params.id);
        if (!improvment) {
            return next(
                new ErrorHander(`improvment Link not found`)
              );
        }
        await Improvment.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'improvment removed' });
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

