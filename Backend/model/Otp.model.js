import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	code: {
		type: Number,
		required: true,
	},
	verified: {
		type: Boolean,
		required: true,
	},
	expiresIn: {
		type: Date,
		required: true,
	},
});

export default mongoose.model.Otp || mongoose.model("Otp", OtpSchema);
