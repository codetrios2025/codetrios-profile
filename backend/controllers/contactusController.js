const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ContactUs = require("../models/contactUsModel");
const csrf = require("csurf");
const axios = require("axios");
const transporter = require("../config/email");

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

exports.submitContact = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      company,
      mobile,
      email,
      message,
      captchaToken,
    } = req.body;

    // 1. Validate fields
    if (!firstname || !lastname || !email || !mobile || !message) {
      return res.status(400).json({ message: "All required fields missing" });
    }

    // 2. Verify reCAPTCHA
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    //console.log(captchaToken);
    //console.log(secretKey);
    const googleRes = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`
    );

    if (!googleRes.data.success) {
      return res.status(400).json({ message: "Invalid Captcha" });
    }

    // 3. Save to DB
    const formData = new ContactUs({
      firstname,
      lastname,
      company,
      mobile,
      email,
      message,
      captchaToken,
    });

    await formData.save();

    // ---------- Send Email to Admin ----------
    const mailOptions = {
      from: '"Website Contact Form" <codetrio2025@gmail.com>',
      to: "codetrio2025@gmail.com", // admin email
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Inquiry</h3>
        <p><b>Name:</b> ${firstname} ${lastname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Requirement:</b> ${requirement}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully!",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
