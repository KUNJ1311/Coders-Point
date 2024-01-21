import React from "react";
import { useSelector } from "react-redux";
import { formatDateTime, formatDate } from "../../FormateDate";
const ChatMessage = ({ message }) => {
	const mode = useSelector((state) => state.themeKey);

	return (
		<>
			<div className={"chat-list-user " + (mode ? "" : "darkwhite")}>
				<div className="chat-data">
					<img src="https://cdn.discordapp.com/avatars/715429945295372329/a977e19af9bf390800ab713f57edb7a1.webp?size=100" className="chat-data-avatar" alt=""></img>
					<h3 className="chat-data-header">
						<span style={{ marginRight: "0.25rem", cursor: "pointer" }}>
							<span className={mode ? "" : "name"}>{message.sender.username}</span>
						</span>
						<span className={"chat-timestamp " + (mode ? "" : "darkfont")} data-tooltip-id="my-tooltip" data-tooltip-content={formatDateTime(message.createdAt)} data-tooltip-offset={10} data-tooltip-delay-show={800} data-tooltip-place="top">
							{formatDate(message.createdAt)}
						</span>
					</h3>
					<div className={"chat-main-user " + (mode ? "" : "darkwhite")}>
						<span className={mode ? "" : "darkfont"}>{message.content}</span>
					</div>
				</div>
			</div>
		</>
	);
	/* <li className={"chat-list-item " + (mode ? "" : "darkwhite")}>
		 	<div className={"chat-list-user " + (mode ? "" : "darkwhite")}>
		 		<div className="chat-data">
		 			<img src="https://cdn.discordapp.com/avatars/715429945295372329/a977e19af9bf390800ab713f57edb7a1.webp?size=100" className="chat-data-avatar" alt=""></img>
		 			<h3 className="chat-data-header">
		 				<span style={{ marginRight: "0.25rem", cursor: "pointer" }}>
		 					<span className={mode ? "" : "name"}>{message.sender.username}</span>
		 				</span>
		 				<span className={"chat-timestamp " + (mode ? "" : "darkfont")} data-tooltip-id="my-tooltip" data-tooltip-content={formatDateTime(message.timestamp.createdAt)} data-tooltip-offset={10} data-tooltip-delay-show={800} data-tooltip-place="top">
		 					{formatDate(message.timestamp.createdAt)}
		 				</span>
		 			</h3>
		 			<div className={"chat-main-user " + (mode ? "" : "darkwhite")}>
		 				<span className={mode ? "" : "darkfont"}>{message.content}</span>
		 			</div>
		 		</div>
		 	</div> */
	/*  	<div className="chat-same-user">
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
				   	</div> */
};

export default ChatMessage;
