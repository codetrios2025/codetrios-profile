const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Address = require("../models/addressModel");

// addressController.js
exports.getAllAddress = catchAsyncErrors(async (req, res, next) => {
    const { page,order = "asc" } = req.query; // Get the page title from query parameters

    let addresses;
     // Determine sort order (ascending or descending)
     const sortOrder = order === "desc" ? -1 : 1;

    if (page) {
        addresses = await Address.find({ page }).sort({ order: sortOrder });// Filter addresses by page title
    } else {
        addresses = await Address.find().sort({ order: sortOrder }); // Get all addresses if no page title is provided
    }

    res.status(200).json({
        success: true,
        addresses,
    });
});

exports.createAddress = catchAsyncErrors(async (req, res, next) => {
    const { title,city,addressName, email, phoneNumber, status ,page,order} = req.body;

    const newAddress = new Address({
        title,
        city,
        addressName,
        email,
        phoneNumber,
        status,
        order,
        page
    });
    const savedAddress = await newAddress.save();
    res.status(201).json(savedAddress);
});

exports.getAddressById = catchAsyncErrors(async (req, res, next) => {
    const address = await Address.findById(req.params.id);
    if (!address) {
        return next(new ErrorHander(`Address not found with id: ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        address,
    });
});

exports.updateAddress = catchAsyncErrors(async (req, res, next) => {
    const {title,city, addressName, email, phoneNumber, status,page ,order} = req.body;
  
    const address = await Address.findById(req.params.id);
    if (!address) {
        return next(new ErrorHander(`Address not found with id: ${req.params.id}`, 404));
    }

    address.title = title || address.title;
    address.city = city || address.city;
    address.addressName = addressName || address.addressName;
    address.email = email || address.email;
    address.phoneNumber = phoneNumber || address.phoneNumber;
    address.page = page || address.page;
    address.status = status !== undefined ? status : address.status;
    address.order = order !== undefined ? order : address.order;

    const updatedAddress = await address.save();
    res.status(200).json({
        success: true,
        updatedAddress,
    });
});

exports.deleteAddress = catchAsyncErrors(async (req, res, next) => {
    const address = await Address.findById(req.params.id);
    if (!address) {
        return next(new ErrorHander(`Address not found with id: ${req.params.id}`, 404));
    }

    await Address.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Address removed' });
});
