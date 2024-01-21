import React, { useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import ChatMessage from "./Chat/ChatMessage";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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
			sender: "Faladu",
			messages: [
				{ text: "nonono", timestamp: "Fri Jul 07 2023 13:25:00 GMT+0530 (India Standard Time)" },
				{ text: "yes", timestamp: "Wed Mar 14 2023 20:15:45 GMT+0530 (India Standard Time)" },
				{ text: "bye by sdad", timestamp: "Fri Jul 07 2023 14:25:00 GMT+0530 (India Standard Time)" },
			],
		},
		{
			sender: "Kunj Faladu",
			messages: [
				{ text: "jad pro", timestamp: "Fri Jul 07 2023 12:25:00 GMT+0530 (India Standard Time)" },
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
			<div className={"chat-area " + (mode ? "" : "chat-area-dark")}>
				<div className={"chat-list " + (mode ? "" : "chat-area-dark")}>
					<div className="chat-list-div">
						<ol className={"chat-ol " + (mode ? "" : "dark")}>
							<div className={"chat-timeline " + (mode ? "" : "dark")}>
								<span className={"span " + (mode ? "" : "span-col time_color")}>October 1, 2023</span>
							</div>
							{messages.map((message, index) => (
								<ChatMessage key={index} message={message} className={mode ? "" : "dark"} />
							))}
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
