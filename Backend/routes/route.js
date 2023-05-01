import { Router } from "express";
const router = Router();

//! *** all controllers *** !//
import * as controller from "../controller/appController.js";

//? POST
router.route("/register").post(controller.register);
//TODO ↓↓↓↓↓↓↓↓
// router.route("/authenticate").post();
router.route("/registerMail").post((req, res) => {
	res.end();
});
//TODO ↑↑↑↑↑↑↑↑
router.route("/login").post(controller.login);

//? GET
router.route("/user/:username").get(controller.getUser);
router.route("/generateOTP").post(controller.generateOTP);
router.route("/verifyOTP").post(controller.verifyOTP);
router.route("/createResetSession").post(controller.createResetSession);

//? PUT
router.route("/updateuser").put(controller.updateUser);
router.route("/resetPassword").put(controller.resetPassword);

export default router;
