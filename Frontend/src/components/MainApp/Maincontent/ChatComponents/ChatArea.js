import React, { useEffect, useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { BsSendFill } from "react-icons/bs";
import ChatMessageUser from "./Chat/ChatMessageUser";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ChatMessageSameUser from "./Chat/ChatMessageSameUser";
import { formatTimeLine } from "../FormateDate";
import { fetchMessage, sendMessage } from "../../../helper/helper";
import io from "socket.io-client";

var socket, chat;
const ChatArea = () => {
	const mode = useSelector((state) => state.themeKey);
	const userData = JSON.parse(localStorage.getItem("userdata"));

	const [messageContent, setMessageContent] = useState("");
	const messagesEndRef = useRef(null);
	const dyParams = useParams();
	const [chat_id, chat_user] = dyParams._id.split("&");
	const [allMessages, setAllMessages] = useState([]);

	const handleSendMessage = async () => {
		const { data } = await sendMessage(messageContent, chat_id);
		socket.emit("newMessage", data);
	};

	useEffect(() => {
		const GetData = async () => {
			try {
				const response = await fetchMessage(chat_id);
				socket.emit("join chat", chat_id);
				setAllMessages(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		GetData();
	}, [chat_id]);

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [allMessages]);

	const renderTimeline = (createdAt) => (
		<div className={"chat-timeline " + (mode ? "" : "dark")}>
			<span className={"span " + (mode ? "" : "span-col time_color")}>{formatTimeLine(createdAt)}</span>
		</div>
	);

	//? connect to socket
	useEffect(() => {
		socket = io("http://localhost:8080/");
		socket.emit("setup", userData);
	}, []);

	//? new message received
	useEffect(() => {
		socket.on("message received", (newMessages) => {
			if (chat_id === newMessages.data.chat._id) {
				setAllMessages((prevMessages) => [...prevMessages, newMessages.data]);
			}
		});
	}, [chat_id]);

	return (
		<div style={{ overflow: "auto", display: "flex", flex: "1 1 auto", flexDirection: "column" }}>
			<div className={"chat-area " + (mode ? "" : "chat-area-dark")}>
				<div className={"chat-list " + (mode ? "" : "chat-area-dark")}>
					<div className="chat-list-div">
						<ol className={"chat-ol " + (mode ? "" : "dark")}>
							{allMessages.map((message, index) => {
								const previousMsg = index > 0 ? allMessages[index - 1] : null;
								const sameSender = previousMsg && previousMsg.sender._id === message.sender._id;
								const sameDay = previousMsg && new Date(message.createdAt).toDateString() === new Date(previousMsg.createdAt).toDateString();
								const isFirstMessageOfDay = index === 0 || !sameDay;
								const renderTimelineComponent = isFirstMessageOfDay ? renderTimeline(message.createdAt) : null;
								return (
									<React.Fragment key={index}>
										{renderTimelineComponent}
										<li className={"chat-list-item " + (mode ? "" : "darkwhite")} key={message._id}>
											{sameSender && sameDay ? <ChatMessageSameUser message={message} className={mode ? "" : "dark"} /> : <ChatMessageUser message={message} className={mode ? "" : "dark"} />}
										</li>
									</React.Fragment>
								);
							})}
							<div className="invi-block"></div>
							<div ref={messagesEndRef}></div>
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
							<textarea
								value={messageContent}
								onChange={(e) => {
									e.target.style.height = "auto";
									e.target.style.height = `${e.target.scrollHeight}px`;
									setMessageContent(e.target.value);
								}}
								onKeyDown={(event) => {
									if (event.code === "Enter" && !event.shiftKey) {
										handleSendMessage();
										setMessageContent("");
										const textarea = event.target;
										if (textarea) {
											textarea.style.height = "auto";
										}
										event.preventDefault();
									}
								}}
								rows={1}
								type="text"
								placeholder="Message #General"
							/>
							<button type="button" className="add-btn">
								<BsSendFill
									type="button"
									onClick={(event) => {
										handleSendMessage();
										setMessageContent("");
										const textarea = event.target.parentElement && event.target.parentElement.querySelector("textarea");
										if (textarea) {
											textarea.style.height = "auto";
										}
									}}
								/>
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ChatArea;
