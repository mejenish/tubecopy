import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();


router.route("/register").post(registerUser);
// router.post("/register",registerUser); //both are same but you can add lots of .newMethods in the above's

export default router;