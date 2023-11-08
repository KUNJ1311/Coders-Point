import React, { useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import ChatMessage from "./Chat/ChatMessage";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../../../../Features/themeSlice";

const ChatArea = () => {
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
			sender: "Kunj Faladu",
			messages: [
				{ text: "jaj asdnad", timestamp: new Date() },
				// Add more messages for the same sender
			],
		},
		{
			sender: "Faladu",
			messages: [
				{ text: "nonono", timestamp: new Date() },
				{ text: "yes", timestamp: new Date() },
				{ text: "bye by sdad", timestamp: new Date() },
			],
		},
		{
			sender: "Kunj Faladu",
			messages: [
				{ text: "jad pro", timestamp: new Date() },
				// Add more messages for the same sender
			],
		},

		// Add more message groups
	]);

	const handleSendMessage = () => {
		const newMessage = {
			sender: "Kunj Faladu",
			text: value,
			timestamp: new Date(),
		};

		// Find the group with the same sender or create a new one
		const updatedMessages = [...messages];
		const groupIndex = updatedMessages.findIndex((group) => group.sender === newMessage.sender);

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
			<div className="chat-area">
				<div className="chat-list">
					<div className="chat-list-div">
						<ol className="chat-ol">
							<div className="chat-timeline">
								<span>October 1, 2023 </span>
							</div>
							{messages.map((message, index) => (
								<ChatMessage key={index} message={message} />
							))}
							<div className="invi-block"></div>
						</ol>
					</div>
				</div>
			</div>
			<form className="chat-form">
				<div className="chat-input">
					<div className="auto-height">
						<div style={{ display: "flex", alignItems: "flex-start", flex: "0 0 auto" }}>
							<button type="button" className="add-btn">
								<IoAddCircle />
							</button>
						</div>
						<div style={{ display: "flex", alignItems: "center", flex: "1 1 auto", minHeight: "44px" }}>
							<textarea
								rows={1}
								type="text"
								placeholder="Message #General"
								value={messageContent}
								onChange={(e) => {
									setMessageContent(e.target.value);
								}}
								onKeyDown={(event) => {
									if (event.code == "Enter") {
										// sendMessage();
										setMessageContent("");
										// setRefresh(!refresh);
									}
								}}
							/>
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
