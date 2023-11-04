import React from "react";
import { HiChatAlt } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { Tooltip } from "react-tooltip";

const TopNav = (props) => {
	const { hideUser, handleUserClick } = props;
	return (
		<section className="align-c d-flex">
			<div className="relative children_nav">
				<div className="maincontent-title">
					<div>
						<HiChatAlt className="big-type-svg" fill="#b5bac1" />
					</div>
					<span data-tooltip-id="chat-timestamp-tooltips" data-tooltip-content="hi">
						General
					</span>
				</div>
				<div className="toolbar_nav">
					<div id="chat-nav-tooltip">
						<ImUsers className="big-type-svg" onClick={handleUserClick} fill={hideUser ? "#b5bac1" : "#ffffff"} />
					</div>
				</div>
				<Tooltip anchorSelect="#chat-nav-tooltip" place="bottom" content={hideUser ? "Show Member List" : "Hide Member List"} id="tooltip" style={{ fontSize: "14px" }} />
			</div>
		</section>
	);
};

export default TopNav;
