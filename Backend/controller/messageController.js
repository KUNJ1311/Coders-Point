import Message from "../model/Message.model.js";
import User from "../model/User.model.js";
import Chat from "../model/Chat.model.js";

export async function allMessages(req, res) {
	try {
		const message = await Message.find({ chat: req.params.chatId }).populate("sender", "username email").populate("reciever").populate("chat");
		res.json(message);
	} catch (error) {
		res.status(400).send(error.message);
	}
}

export async function sendMessage(req, res) {
	const { content, chatId } = req.body;
	if (!content || !chatId) {
		return res.status(400).send("Invalid data passed");
	}
	var newMessage = {
		sender: req.user.userId,
		content: content,
		chat: chatId,
	};
	try {
		var message = await Message.create(newMessage);
		message = await message.populate("sender", "username");
		message = await message.populate("chat");
		message = await message.populate("reciever");
		message = await User.populate(message, { path: "chat.users", select: "username email" });
		await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });
		res.json(message);
	} catch (error) {
		res.status(400).send(error.message);
	}
}
