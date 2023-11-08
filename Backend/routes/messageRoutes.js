import { Router } from "express";
const messageRoutes = Router();

import * as controller from "../controller/messageController.js";
import Auth from "../middleware/auth.js";

messageRoutes.route("/:chatId").get(Auth, controller.allMessages);
messageRoutes.route("/").post(Auth, controller.sendMessage);

export default messageRoutes;
