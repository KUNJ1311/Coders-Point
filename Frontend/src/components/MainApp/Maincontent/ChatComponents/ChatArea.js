import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { BsSendFill } from "react-icons/bs";
import ChatMessageUser from "./Chat/ChatMessageUser";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ChatMessageSameUser from "./Chat/ChatMessageSameUser";
import RefreshContext from "../../../context/refreshContext";
import { formatTimeLine } from "../FormateDate";

const ChatArea = () => {
	const mode = useSelector((state) => state.themeKey);
	const userData = JSON.parse(localStorage.getItem("userdata"));

	const [messageContent, setMessageContent] = useState("");
	const messagesEndRef = useRef(null);
	const dyParams = useParams();
	const [chat_id, chat_user] = dyParams._id.split("&");
	const [allMessages, setAllMessages] = useState([]);

	const { refresh, setRefresh } = useContext(RefreshContext);
	const handleSendMessage = () => {
		const config = {
			headers: {
				Authorization: `Bearer ${userData.token}`,
			},
		};
		axios
			.post(
				"http://localhost:8080/message/",
				{
					content: messageContent,
					chatId: chat_id,
				},
				config
			)
			.then(({ data }) => {
				console.log("Message Fired");
			});
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const config = {
					headers: {
						Authorization: `Bearer ${userData.token}`,
					},
				};
				const response = await axios.get("http://localhost:8080/message/" + chat_id, config);
				setAllMessages(response.data);
			} catch (error) {
				console.error("Error fetching messages:", error);
			}
		};

		fetchData();
	}, [chat_id, userData.token]);

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
										setRefresh(!refresh);
										const textarea = event.target;
										textarea.style.height = "auto";
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
										const textarea = event.target.parentElement.querySelector("textarea");
										textarea.style.height = "auto";
										setRefresh(!refresh);
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
