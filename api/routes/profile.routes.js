import express from "express";
import { auth } from "../middlewares/auth.js";

import {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
} from "../controllers/profile.controller.js";

const router = express.Router();

// Profile routes
router.delete("/deleteProfile", auth, deleteAccount);
router.put("/updateProfile", auth, updateProfile);
router.post("/getUserDetails", auth, getAllUserDetails);
router.put("/updateDisplayPicture", auth, updateDisplayPicture);

export default router;
