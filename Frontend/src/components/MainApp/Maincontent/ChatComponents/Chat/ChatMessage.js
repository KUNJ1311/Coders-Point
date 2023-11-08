import React from "react";
import { useSelector } from "react-redux";

const ChatMessage = (props) => {
	const mode = useSelector((state) => state.themeKey);
	const formatTime = (timestamp) => {
		const date = new Date(timestamp);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const amOrPm = hours >= 12 ? "PM" : "AM";
		const formattedHours = hours % 12 || 12;
		const formattedMinutes = minutes.toString().padStart(2, "0");
		return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
	};

	const formatDate = (timestamp) => {
		const date = new Date(timestamp);
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const day = date.getDate().toString().padStart(2, "0");
		const year = date.getFullYear();
		const time = formatTime(timestamp);
		return `${month}/${day}/${year} ${time}`;
	};

	const formatDateTime = (timestamp) => {
		const date = new Date(timestamp);
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		};
		return date.toLocaleDateString("en-US", options);
	};

	const { message } = props;
	if (!message) {
		return null; // Return null if message is undefined
	}
	return (
		<>
			{message.messages.map((msg, index) => (
				<li className={"chat-list-item " + (mode ? "" : "darkwhite")} key={index}>
					{index === 0 ? (
						<div className={"chat-list-user " + (mode ? "" : "darkwhite")}>
							<div className="chat-data">
								<img src="https://cdn.discordapp.com/avatars/715429945295372329/a977e19af9bf390800ab713f57edb7a1.webp?size=100" className="chat-data-avatar" alt=""></img>
								<h3 className="chat-data-header">
									<span style={{ marginRight: "0.25rem", cursor: "pointer" }}>
										<span className={mode ? "" : "name"}>{message.sender}</span>
									</span>
									<span className={"chat-timestamp " + (mode ? "" : "darkfont")} data-tooltip-id="my-tooltip" data-tooltip-content={formatDateTime(msg.timestamp)} data-tooltip-offset={10} data-tooltip-delay-show={800} data-tooltip-place="top">
										{formatDate(msg.timestamp)}
									</span>
								</h3>
								<div className={"chat-main-user " + (mode ? "" : "darkwhite")}>
									<span className={mode ? "" : "darkfont"}>{msg.text}</span>
								</div>
							</div>
						</div>
					) : (
						<div className="chat-same-user">
							<div style={{ position: "static", marginLeft: "0", paddingLeft: "0", textIndent: "0" }}>
								<span className="chat-small-timestamp">
									<time className={mode ? "" : "darkfont"} data-tooltip-id="my-tooltip" data-tooltip-content={formatDateTime(msg.timestamp)} data-tooltip-offset={10} data-tooltip-delay-show={800} data-tooltip-place="top">
										<i className={"timestamp-separator " + (mode ? "" : "darkfont")} aria-hidden="true">
											[
										</i>
										{formatTime(msg.timestamp)}
										<i className={"timestamp-separator " + (mode ? "" : "darkfont")} aria-hidden="true">
											]
										</i>
									</time>
								</span>
								<div className={"chat-main-user " + (mode ? "" : "darkfont")}>
									<span>{msg.text}</span>
								</div>
							</div>
						</div>
					)}
				</li>
			))}
		</>
	);
};

export default ChatMessage;
