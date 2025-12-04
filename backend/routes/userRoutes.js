const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  getAllUser,
  getSingleUser,
  deleteUser,
  getSubAdminUserDetails,
  SoftdeleteUser,
  updateUser,
  updateUserPassword,
  toggleUserStatus,
} = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { upload } = require("../middleware/uploadMiddleware");

const router = express.Router();

router.route("/register").post(upload.single("avatar"), registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/admin/subusers").get(authMiddleware, getSubAdminUserDetails);
router.route("/admin/delete/:id").delete(authMiddleware, SoftdeleteUser);
router
  .route("/admin/update/:id")
  .put(authMiddleware, upload.single("avatar"), updateUser);
router
  .route("/admin/change-update-password/:id")
  .put(authMiddleware, updateUserPassword);
router.route("/admin/update-status/:id").put(authMiddleware, toggleUserStatus);

router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);

router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
