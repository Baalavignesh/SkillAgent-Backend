import express from "express";

const router = express.Router();

import {
  LogoutUser,
  RegisterUser,
  SignInUser,
} from "../../controller/firebase/auth_controller.ts";

// router.get("/", getUser);

router.post("/register", RegisterUser);

router.post("/login", SignInUser);

router.post("/logout", LogoutUser);



export default router;
