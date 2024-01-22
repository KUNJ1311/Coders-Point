import React from "react";
import { useSelector } from "react-redux";
import { formatDateTime, formatDate } from "../../FormateDate";
const ChatMessage = ({ message }) => {
	const mode = useSelector((state) => state.themeKey);

	return (
		<>
			<div className={"chat-list-user " + (mode ? "" : "darkwhite")}>
				<div className="chat-data">
					{message.sender.avatar ? (
						<img className="chat-data-avatar" src={message.sender.avatar} alt="" />
					) : (
						<span style={{ pointerEvents: "auto", position: "absolute", left: "16px", marginTop: "calc(4px - 0.125rem)", width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden", cursor: "pointer", WebkitUserSelect: "none", MozUserSelect: "none", userSelect: "none", flex: "0 0 auto", zIndex: "1", backgroundColor: message.sender.color }}>
							<span className="d-flex" style={{ justifyContent: "center", alignItems: "center", width: "40px", height: "40px", fontSize: "29px", fontWeight: "400" }}>
								{message.sender.username.charAt(0).toUpperCase()}
							</span>
						</span>
					)}
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
};

export default ChatMessage;
