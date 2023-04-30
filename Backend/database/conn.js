import mongoose from "mongoose";
const dbConnectionString = "mongodb+srv://CodersPoint:%23Coder%23KRRD%24%24@coderspoint.tg5xpoe.mongodb.net/test";

const connect = async () => {
	await mongoose.connect(dbConnectionString);
	mongoose.set("strictQuery", true);
	console.log("MongoDB connected");
};
export default connect;
