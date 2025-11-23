const ErrorHander = require("../utils/errorhandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    if(req.file.fieldname){
        req.body.avatar = req.file.filename;
    }
    const { name, email, password , avatar ,role, modules} = req.body;
    
    // Validate required fields
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email, and password are required." });
  }
    const user = await User.create({
      name,
      email,
      password,
      avatar,
       role: role,
    modules: Array.isArray(modules)
      ? modules
      : typeof modules === "string"
      ? [modules]
      : [],
    });
  
    sendToken(user, 201, res);
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      return next(new ErrorHander("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new ErrorHander("Invalid email or password", 401));
    }
   if (user.isDeleted) {
    return next(new ErrorHander("Your account is inactive. Please contact administrator.", 403));
  }
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHander("Invalid email or password", 401));
    }
  
    sendToken(user, 200, res);
});

// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `User Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHander(error.message, 500));
  }
});

// Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHander(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHander("Password does not password", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// Get not deleted User Detail
exports.getSubAdminUserDetails = catchAsyncErrors(async (req, res, next) => {
  
  const user =await User.find();
  // const user =await User.find();

  res.status(200).json({
    success: true,
    user,
  });
});
// update User password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHander("password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});

// Get all users(admin)
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get single user (admin)
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// Delete User --Admin
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }
  await user.remove();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});
// Soft Delete User -- Admin
exports.SoftdeleteUser = catchAsyncErrors(async (req, res, next) => {

 const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }

  await user.deleteOne(); // or: await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "User deleted permanently",
  });


});

// Update User -- Admin or Subadmin
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, role } = req.body;

    const modules = Array.isArray(req.body.modules)
      ? req.body.modules
      : req.body.modules
      ? [req.body.modules]
      : [];

  const updateData = {
    name,
    email,
    role,
    modules,
  };

  // If avatar is uploaded (multipart/form-data)
  if (req.file && req.file.filename) {
    updateData.avatar = req.file.filename;
  }

  const user = await User.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    user,
  });
});
//Update Password by user

exports.updateUserPassword = catchAsyncErrors(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.params.id;

  const user = await User.findById(userId).select("+password");

  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }

  const isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) {
    return next(new ErrorHander("Old password is incorrect", 400));
  }

  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!_+=-])[A-Za-z\d@#$%^&*!_+=-]{8,}$/;
  if (!strongPasswordRegex.test(newPassword)) {
    return next(new ErrorHander("Password must be strong", 400));
  }

  user.password = newPassword;
  await user.save();

  res.status(200).json({ success: true, message: "Password updated successfully" });
});

// Toggle user active/inactive
exports.toggleUserStatus = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }

  user.isDeleted = req.body.isDeleted;
  await user.save();

  res.status(200).json({
    success: true,
    message: `User marked as ${user.isDeleted ? "Inactive" : "Active"}`,
  });
});


