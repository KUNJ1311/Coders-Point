import React, { useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import ChatMessageUser from "./Chat/ChatMessageUser";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ChatMessageSameUser from "./Chat/ChatMessageSameUser";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../../../../Features/themeSlice";

const ChatArea = () => {
	const mode = useSelector((state) => state.themeKey);
	function handleChange(event) {
		setValue(event.target.value);
		event.target.style.height = "auto";
		event.target.style.height = `${event.target.scrollHeight}px`;
	}
	// const dispatch = useDispatch();
	// const dark = useSelector((state) => state.themeKey);

	const [messageContent, setMessageContent] = useState("");
	// const messagesEndRef = useRef(null);
	// const dyParams = useParams();
	// const [chat_id, chat_user] = dyParams._id.split("&");
	// console.log(chat_id, chat_user);
	// const userData = JSON.parse(localStorage.getItem("userdata"));
	// const [allMessages, setAllMessages] = useState([]);
	// console.log("Chat area id : ", chat_id._id);
	// const sendMessage = () => {
	// 	console.log("SendMessage Fired to", chat_id._id);
	// 	const config = {
	// 		headers: {
	// 			Authorization: `Bearer ${userData.data.token}`,
	// 		},
	// 	};
	// 	axios
	// 		.post(
	// 			"http://localhost:8080/message/",
	// 			{
	// 				content: messageContent,
	// 				chatId: chat_id,
	// 			},
	// 			config
	// 		)
	// 		.then(({ data }) => {
	// 			console.log("Message Fired");
	// 		});
	// };
	// const scrollToBottom = () => {
	//   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	// };

	const [value, setValue] = useState("");
	const [messages, setMessages] = useState([
		{
			sender: {
				_id: "user_id_1",
				username: "John Doe",
				email: "john@example.com",
			},
			chat: {
				_id: "chat_id_1",
				chatName: "General",
				isGroupChat: false,
				users: ["user_id_1", "user_id_2"],
				latestMessage: null,
				groupAdmin: null,
				img: "chat_image_url",
				color: "#3498db",
				timestamps: { createdAt: "2023-07-07T13:25:00Z", updatedAt: "2023-07-07T13:25:00Z" },
			},
			content: "Hello, how are you?",
			timestamp: { createdAt: "2023-07-07T13:25:00Z", updatedAt: "2023-07-07T13:25:00Z" },
		},
		{
			sender: {
				_id: "user_id_1",
				username: "Jane Doe",
				email: "jane@example.com",
			},
			chat: {
				_id: "chat_id_2",
				chatName: "Random",
				isGroupChat: true,
				users: ["user_id_2", "user_id_3", "user_id_4"],
				latestMessage: null,
				groupAdmin: "user_id_2",
				img: "chat_image_url_random",
				color: "#e74c3c",
				timestamps: { createdAt: "2023-07-08T10:30:00Z", updatedAt: "2023-07-08T10:30:00Z" },
			},
			content: "Hi there!",
			timestamp: { createdAt: "2023-07-08T10:30:00Z", updatedAt: "2023-07-08T10:30:00Z" },
		},
		{
			sender: {
				_id: "user_id_3",
				username: "Alice Johnson",
				email: "alice@example.com",
			},
			chat: {
				_id: "chat_id_3",
				chatName: "Tech Talk",
				isGroupChat: true,
				users: ["user_id_3", "user_id_5", "user_id_6"],
				latestMessage: null,
				groupAdmin: "user_id_3",
				img: "chat_image_url_tech",
				color: "#2ecc71",
				timestamps: { createdAt: "2023-07-09T08:45:00Z", updatedAt: "2023-07-09T08:45:00Z" },
			},
			content: "Discussing the latest tech trends.",
			timestamp: { createdAt: "2023-07-09T08:45:00Z", updatedAt: "2023-07-09T08:45:00Z" },
		},
		{
			sender: {
				_id: "user_id_4",
				username: "Bob Smith",
				email: "bob@example.com",
			},
			chat: {
				_id: "chat_id_4",
				chatName: "Project Team",
				isGroupChat: true,
				users: ["user_id_4", "user_id_7", "user_id_8"],
				latestMessage: null,
				groupAdmin: "user_id_4",
				img: "chat_image_url_project",
				color: "#f39c12",
				timestamps: { createdAt: "2023-07-10T15:20:00Z", updatedAt: "2023-07-10T15:20:00Z" },
			},
			content: "Discussing project updates and tasks.",
			timestamp: { createdAt: "2023-07-10T15:20:00Z", updatedAt: "2023-07-10T15:20:00Z" },
		},
		{
			sender: {
				_id: "user_id_1",
				username: "John Doe",
				email: "john@example.com",
			},
			chat: {
				_id: "chat_id_1",
				chatName: "General",
				isGroupChat: false,
				users: ["user_id_1", "user_id_2"],
				latestMessage: null,
				groupAdmin: null,
				img: "chat_image_url",
				color: "#3498db",
				timestamps: { createdAt: "2023-07-07T13:25:00Z", updatedAt: "2023-07-07T13:25:00Z" },
			},
			content: "34131111111111111?",
			timestamp: { createdAt: "2024-07-07T13:25:00Z", updatedAt: "2024-07-07T13:25:00Z" },
		},
		{
			sender: {
				_id: "user_id_2",
				username: "Jane Doe",
				email: "jane@example.com",
			},
			chat: {
				_id: "chat_id_2",
				chatName: "Random",
				isGroupChat: true,
				users: ["user_id_2", "user_id_3", "user_id_4"],
				latestMessage: null,
				groupAdmin: "user_id_2",
				img: "chat_image_url_random",
				color: "#e74c3c",
				timestamps: { createdAt: "2023-07-08T10:30:00Z", updatedAt: "2023-07-08T10:30:00Z" },
			},
			content: "eeeeeeeeeeeeee!",
			timestamp: { createdAt: "2024-07-08T10:30:00Z", updatedAt: "2024-07-08T10:30:00Z" },
		},
		// Add more messages if needed
	]);

	const handleSendMessage = () => {
		const newMessage = {
			sender: {
				_id: "user_id_1", // Replace with actual user ID
				username: "John Doe", // Replace with actual username
				email: "john@example.com", // Replace with actual email
			},
			chat: {
				_id: "chat_id_1", // Replace with actual chat ID
				chatName: "General", // Replace with actual chat name
				isGroupChat: false, // Replace with actual value
				users: ["user_id_1", "user_id_2"], // Replace with actual user IDs
				latestMessage: null, // Replace with actual latest message ID if applicable
				groupAdmin: null, // Replace with actual group admin ID if applicable
				img: "chat_image_url", // Replace with actual image URL or path
				color: "#3498db", // Replace with actual color code
				timestamps: { createdAt: new Date(), updatedAt: new Date() }, // Replace with actual timestamps
			},
			content: value,
			timestamp: { createdAt: new Date(), updatedAt: new Date() },
		};

		// Find the group with the same sender or create a new one
		const updatedMessages = [...messages];
		const groupIndex = updatedMessages.findIndex((group) => group.sender._id === newMessage.sender._id);

		if (groupIndex === -1) {
			updatedMessages.push({ sender: newMessage.sender, messages: [newMessage] });
		} else {
			updatedMessages[groupIndex].messages.push(newMessage);
		}

		// Update the state with the new messages
		setMessages(updatedMessages);
		// Clear the input field
		setValue("");
	};

	return (
		<div style={{ overflow: "auto", display: "flex", flex: "1 1 auto", flexDirection: "column" }}>
			<div className={"chat-area " + (mode ? "" : "chat-area-dark")}>
				<div className={"chat-list " + (mode ? "" : "chat-area-dark")}>
					<div className="chat-list-div">
						<ol className={"chat-ol " + (mode ? "" : "dark")}>
							<div className={"chat-timeline " + (mode ? "" : "dark")}>
								<span className={"span " + (mode ? "" : "span-col time_color")}>October 1, 2023</span>
							</div>
							{messages.map((message, index) => {
								const previousMsg = index > 0 ? messages[index - 1] : null;
								const sameSender = previousMsg && previousMsg.sender._id === message.sender._id;
								const sameDay = previousMsg && new Date(message.timestamp.createdAt).toDateString() === new Date(previousMsg.timestamp.createdAt).toDateString();

								return (
									<li className={"chat-list-item " + (mode ? "" : "darkwhite")} key={index}>
										{sameSender && sameDay ? <ChatMessageSameUser key={index} message={message} className={mode ? "" : "dark"} /> : <ChatMessageUser key={index} message={message} className={mode ? "" : "dark"} />}
									</li>
								);
							})}
							<div className="invi-block"></div>
						</ol>
					</div>
				</div>
			</div>
			<form className={"chat-form " + (mode ? "" : "dark")}>
				<div className="chat-input">
					<div className={"auto-height " + (mode ? "" : "text")}>
						<div
							style={{
								display: "flex",
								alignItems: "flex-start",
								flex: "0 0 auto",
							}}
						>
							<button type="button" className="add-btn">
								<IoAddCircle />
							</button>
						</div>
						<div style={{ display: "flex", alignItems: "center", flex: "1 1 auto", minHeight: "44px" }}>
							{/* <textarea
                value={value}
                onChange={handleChange}
                rows={1}
                type="text"
                placeholder="Message #General"
              /> */}
							<textarea value={value} onChange={handleChange} rows={1} type="text" placeholder="Message #General" />
							<button type="button" onClick={handleSendMessage}>
								Send
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ChatArea;
