import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./routes/route.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { Server } from "socket.io";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); //? less hackers know about our stack

const port = 8080;

//* HTTP GET Request
app.get("/", (req, res) => {
	res.status(201).json("Hello Backend!");
});

//* api routes
app.use("/api", router);
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);

//* Start Server only when valid connection
connect()
	.then(() => {
		try {
			const server = app.listen(port, () => {
				console.log(`Server connected to http://localhost:${port}`);
			});

			//? Socket.IO connect
			const io = new Server(server, {
				cors: {
					origin: "*",
				},
				pingTimeout: 60000,
			});
			const connectedUsers = [];

			io.on("connection", (socket) => {
				socket.on("setup", (user) => {
					const isUserConnected = connectedUsers.some((connectedUser) => connectedUser._id === user._id);

					if (isUserConnected) {
						return;
					} else {
						// User is not connected, add to the list and join the socket room
						connectedUsers.push(user);
						socket.join(user._id);
						socket.emit("Connected");
					}
				});

				socket.on("join chat", (room) => {
					socket.join(room);
				});

				socket.on("leave chat", (room) => {
					socket.leave(room);
				});

				socket.on("newMessage", (newMessageStatus) => {
					var chat = newMessageStatus.data.chat;
					if (!chat.users) {
						return console.log("chat.users not defined");
					}
					chat.users.forEach((user) => {
						// if (user._id === newMessageStatus.data.sender._id) return;
						io.to(user._id).emit("message received", newMessageStatus);
					});
				});
			});
		} catch (error) {
			console.log("Cannot connect to the server");
		}
	})
	.catch((error) => {
		console.log("Invalid Database Connection...!", error);
	});
