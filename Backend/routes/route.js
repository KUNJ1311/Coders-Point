import { Router } from "express";
const router = Router();

//! *** all controllers *** !//
import * as controller from "../controller/appController.js";
import Auth, { localVariables } from "../middleware/auth.js";
import { registerMail } from "../controller/mailer.js";

//? POST
router.route("/validateToken").post(controller.validateToken);
router.route("/register").post(controller.register);
router.route("/registerMail").post(registerMail);
router.route("/authenticate").post(controller.verifyUser, (req, res) => {
	res.end();
});
router.route("/login").post(controller.verifyUser, controller.login);
router.route("/checkuser").post(controller.checkUser);

//? GET
router.route("/user/:email").get(controller.getUser);
router.route("/generateOTP").get(controller.verifyUser, localVariables, controller.generateOTP);
router.route("/generateOTP/newuser").get(localVariables, controller.generateOTP);
router.route("/verifyOTP/newuser").get(controller.verifyOTPnewuser);
router.route("/verifyOTP").get(controller.verifyUser, controller.verifyOTP);
router.route("/createResetSession").get(controller.createResetSession);

//? PUT
router.route("/updateUser").put(Auth, controller.updateUser);
router.route("/resetPassword").put(controller.verifyUser, controller.resetPassword);

export default router;
