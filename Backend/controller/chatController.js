import Chat from "../model/Chat.model.js";
import User from "../model/User.model.js";

export async function accessChat(req, res) {
	const { userId } = req.body;

	if (!userId) {
		console.log("userId not sent");
		return res.status(400).send(error);
	}
	var isChat = await Chat.find({
		isGroupChat: false,
		$and: [{ users: { $elemMatch: { $eq: req.user._id } } }, { users: { $elemMatch: userId } }],
	})
		.populate("users", "-password")
		.populate("latestMessage");

	isChat = await User.populate(isChat, {
		path: "latestMessage.sender",
		select: "name email",
	});
	if (isChat.length > 0) {
		res.send(isChat[0]);
	} else {
		var chatData = {
			chatName: "sender",
			isGroupChat: false,
			user: [req.user_id, userId],
		};
	}
	try {
		const createdChat = await Chat.create(chatData);
		const FullChat = await Chat.FindOne({ _id: createdChat._id }).populate("users", "-password");
		res.status(200).json(FullChat);
	} catch (error) {
		return res.status(404).send(error);
	}
}

export async function fetchChats(req, res) {
	try {
		const results = await Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
			.populate("users", "-password")
			.populate("groupAdmin", "-password")
			.populate("letestMessage")
			.sort({ updatedAt: -1 });
		const finalresult = await User.populate(results, { path: "latestMessage.sender", select: "name email" });
		res.status(200).send(finalresult);
	} catch (error) {
		res.status(400).send(error);
	}
}

export async function fetchGroups(req, res) {
	try {
		const allGroups = await Chat.where("isGroupChat").equals(true);
		res.status(200).send(allGroups);
	} catch (error) {
		res.status(400).send(error);
	}
}

export async function createGroupChat(req, res) {
	if (!req.body.users || !req.body.name) {
		return res.status(400).send({ message: "Data is insufficient" });
	}

	var users = JSON.parse(req.body.users);
	console.log("chatController/createGroups:", req);
	users.push(req.user);
	try {
		const groupChat = await Chat.create({
			chatName: req.body.name,
			users: users,
			isGroupChat: true,
			groupAdmin: req.user,
		});

		const fullGroupChat = await Chat.findOne({ _id: groupChat._id }).populate("users", "-password").populate("groupAdmin", "-password");
		res.status(200).json(fullGroupChat);
	} catch (error) {
		res.status(400).send(error);
	}
}

export async function groupExit(req, res) {
	const { chatId, userId } = req.body;

	//? Check if the requester is Admin
	const removed = await Chat.finByIdAndUpdate(chatId, userId).populate("users", "-password").populate("groupAdmin", "-password");
	if (!removed) {
		res.status(404).send("Chat Not Found");
	} else {
		res.json(removed);
	}
}
