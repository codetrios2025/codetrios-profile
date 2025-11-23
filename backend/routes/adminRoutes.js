import express from "express";
import { adminLogin, adminDashboard } from "../controllers/adminController.js";
import { loginValidator } from "../validators/adminValidator.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginValidator, adminLogin);
router.get("/dashboard", protectAdmin, adminDashboard);

export default router;
