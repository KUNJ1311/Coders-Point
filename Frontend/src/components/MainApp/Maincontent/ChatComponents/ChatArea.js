import React, { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

const ChatArea = () => {
	const [value, setValue] = useState("");

	//* change text area height dynamically
	function handleChange(event) {
		setValue(event.target.value);
		event.target.style.height = "auto";
		event.target.style.height = `${event.target.scrollHeight}px`;
	}

	return (
		<div style={{ overflow: "auto", display: "flex", flex: "1 1 auto", flexDirection: "column" }}>
			<div className="chat-area">
				<div className="chat-list">
					<div className="chat-list-div">
						<ol className="chat-ol">
							<div className="chat-timeline">
								<span>October 1, 2023</span>
							</div>
							<li className="chat-list-item">
								<div className="chat-list-user">
									<div className="chat-data">
										<img src="https://cdn.discordapp.com/avatars/715429945295372329/a977e19af9bf390800ab713f57edb7a1.webp?size=100" className="chat-data-avatar" alt="" />
									</div>
									<h3 className="chat-data-header">
										<span style={{ marginRight: "0.25rem", cursor: "pointer" }}>
											<span>Kunj Faladu</span>
										</span>
										<span className="chat-timestamp">10/01/2023 10:52 AM</span>
									</h3>
									<div className="chat-main-user">
										<span>hi kunj my name Faladu xsfsa</span>
									</div>
								</div>
							</li>
							<li className="chat-list-item">
								<div className="chat-same-user">
									<span className="chat-small-timestamp">
										<i className="timestamp-separator" aria-hidden="true">
											[
										</i>
										6:13 PM
										<i className="timestamp-separator" aria-hidden="true">
											]
										</i>
									</span>
									<div className="chat-main-user">
										<span>kunj</span>
									</div>
								</div>
							</li>
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
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ChatArea;
