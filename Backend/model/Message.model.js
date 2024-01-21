import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
	{
		sender: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		content: {
			type: String,
			trim: true,
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
		timestamps: true,
	}
);

export default mongoose.model.Message || mongoose.model("Message", MessageSchema);
