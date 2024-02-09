import mongoose from "mongoose";
import ENV from "../config.js";
const dbConnectionString = ENV.MONGODB_URL;

const connect = async () => {
	const connection = mongoose.connection;

	connection.on("error", (err) => {
		console.error("MongoDB Atlas connection error:", err);
	});

	connection.once("open", () => {
		console.log("MongoDB Atlas connection established successfully");
	});

	connection.on("disconnected", () => {
		console.log("MongoDB Atlas connection disconnected");
	});

	await mongoose.connect(dbConnectionString);
	mongoose.set("strictQuery", true);
	console.log("MongoDB Connected Successfully");
};

export default connect;
