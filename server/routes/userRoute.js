import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/userController.js";

// Create a router object
const router = express.Router();

//router object

//routers
//POST || LOGIN USER

router.post("/login", loginController);

//POST||REGISTER USER
router.post("/register", registerController);

// module.exports = router;
export default router;
