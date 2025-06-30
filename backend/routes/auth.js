import express from "express";
import { register, login, logout, getUser } from "../controllers/auth.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me",verifyToken, getUser); // ✅ NEW: Check if user is logged in

export default router;
