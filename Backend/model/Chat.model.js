import mongoose from "mongoose";

const ChatSchema = mongoose.Schema(
	{
		chatName: { type: String },
		isGroupChat: { type: Boolean },
		users: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		latestMessage: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Message",
		},
		groupAdmin: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timeStamp: true,
	}
);

export default mongoose.model.Chat || mongoose.model("Chat", ChatSchema);
