import { Router } from "express";
const router = Router();

//! *** all controllers *** !//
import * as controller from "../controller/chatController.js";
import Auth from "../middleware/auth.js";

router.route("/").post(Auth, controller.accessChat);
router.route("/").get(Auth, controller.fetchChats);
router.route("/creategroup").post(Auth, controller.createGroupChat);
router.route("/fetchgroups").get(Auth, controller.fetchGroups);
router.route("/groupexit").put(Auth, controller.groupExit);

module.exports = router;
