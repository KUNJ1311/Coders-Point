import React, { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import ChatMessage from "./Chat/ChatMessage";

const ChatArea = () => {
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

	function handleChange(event) {
		setValue(event.target.value);
		event.target.style.height = "auto";
		event.target.style.height = `${event.target.scrollHeight}px`;
	}

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
								<span>October 1, 2023</span>
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
							<button className="add-btn">
								<IoAddCircle />
							</button>
						</div>
						<div style={{ display: "flex", alignItems: "center", flex: "1 1 auto", minHeight: "44px" }}>
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
