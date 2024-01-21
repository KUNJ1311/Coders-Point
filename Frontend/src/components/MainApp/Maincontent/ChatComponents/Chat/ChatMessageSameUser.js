import React from "react";
import { useSelector } from "react-redux";
import { formatTime, formatDateTime } from "../../FormateDate";
const ChatMessageSameUser = ({ message }) => {
	const mode = useSelector((state) => state.themeKey);

	return (
		<>
			<div className="chat-same-user">
				<div style={{ position: "static", marginLeft: "0", paddingLeft: "0", textIndent: "0" }}>
					<span className="chat-small-timestamp">
						<time className={mode ? "" : "darkfont"} data-tooltip-id="my-tooltip" data-tooltip-content={formatDateTime(message.timestamp.createdAt)} data-tooltip-offset={10} data-tooltip-delay-show={800} data-tooltip-place="top">
							<i className={"timestamp-separator " + (mode ? "" : "darkfont")} aria-hidden="true">
								[
							</i>
							{formatTime(message.timestamp.createdAt)}
							<i className={"timestamp-separator " + (mode ? "" : "darkfont")} aria-hidden="true">
								]
							</i>
						</time>
					</span>
					<div className={"chat-main-user " + (mode ? "" : "darkfont")}>
						<span>{message.content}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChatMessageSameUser;
