import express from "express";
 const router = express.Router();
import {register,login,getMyProfile,logout} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


router.post("/new",register)
router.post("/login",login)
router.get("/logout",logout)

// router.get("/userid/:id",getUserDetails)
router.get("/me",isAuthenticated ,getMyProfile)
    

export default router;