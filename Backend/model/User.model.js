import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: { true: "Please provide unique Username" },
		unique: { true: "Username Exist" },
	},
	password: {
		type: String,
		required: { true: "Please provide a password" },
		unique: false,
	},
	email: {
		type: String,
		required: { true: "Please provide a unique email" },
		unique: true,
	},
	avatar: {
		type: String,
	},
	color: {
		type: String,
	},
});

export default mongoose.model.User || mongoose.model("User", UserSchema);
