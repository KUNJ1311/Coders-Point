import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
	{
		sender: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		reciever: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		chat: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Chat",
		},
	},
	{
		timeStamp: true,
	}
);

export default mongoose.model.Message || mongoose.model("Message", MessageSchema);
