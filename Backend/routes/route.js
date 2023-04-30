import { Router } from "express";
const router = Router();

//! *** all controllers *** !//
import * as controller from "../controller/appController.js";
import Auth, { localVariables } from "../middleware/auth.js";

//? POST
router.route("/register").post(controller.register);
//TODO ↓↓↓↓↓↓↓↓
//* router.route("/authenticate").post();
router.route("/registerMail").post((req, res) => {
	res.end();
});
router.route("/login").post(controller.verifyUser, controller.login);

//? GET
router.route("/user/:username").get(controller.getUser);
router.route("/generateOTP").get(controller.verifyUser, localVariables, controller.generateOTP);
router.route("/verifyOTP").get(controller.verifyOTP);
router.route("/createResetSession").get(controller.createResetSession);

//? PUT
router.route("/updateUser").put(Auth, controller.updateUser);
router.route("/resetPassword").put(controller.verifyUser, controller.resetPassword);

export default router;
