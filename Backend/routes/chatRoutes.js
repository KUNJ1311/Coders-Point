import { Router } from "express";
const chatRoutes = Router();

//! *** all controllers *** !//
import * as controller from "../controller/chatController.js";
import Auth from "../middleware/auth.js";

chatRoutes.route("/").post(Auth, controller.accessChat);
chatRoutes.route("/").get(Auth, controller.fetchChats);
chatRoutes.route("/creategroup").post(Auth, controller.createGroupChat);
chatRoutes.route("/fetchgroups").get(Auth, controller.fetchGroups);
chatRoutes.route("/groupexit").put(Auth, controller.groupExit);
chatRoutes.route("/addselftogroup").put(Auth, controller.addSelfToGroup);

export default chatRoutes;
