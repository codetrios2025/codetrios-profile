const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ContactUs = require("../models/contactUsModel");
const csrf = require("csurf");

// Middleware to protect routes with CSRF
exports.csrfProtection = csrf({ cookie: true });

// Fetch CSRF token
exports.getCsrfToken = (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
};
// addressController.js
exports.getAllAddress = catchAsyncErrors(async (req, res, next) => {
  const contact = await ContactUs.find();
  res.status(200).json({
    success: true,
    contact,
  });
});

exports.createAddress = catchAsyncErrors(async (req, res, next) => {
  const { title, city, organization, email, phoneNumber, query, message } =
    req.body;

  const newAddress = new ContactUs({
    title,
    city,
    message,
    email,
    phoneNumber,
    query,
    organization,
  });
  const savedAddress = await newAddress.save();
  res.status(201).json(savedAddress);
});

exports.getAddressById = catchAsyncErrors(async (req, res, next) => {
  const address = await ContactUs.findById(req.params.id);
  if (!address) {
    return next(
      new ErrorHander(`Address not found with id: ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    address,
  });
});

exports.deleteAddress = catchAsyncErrors(async (req, res, next) => {
  const address = await ContactUs.findById(req.params.id);
  if (!address) {
    return next(
      new ErrorHander(`ContactUs not found with id: ${req.params.id}`, 404)
    );
  }

  await ContactUs.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "ContactUs removed" });
});
