import React, { useEffect, useState } from "react";
import { HiChatAlt } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { Tooltip } from "react-tooltip";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
const TopNav = (props) => {
	const { hideUser, handleUserClick } = props;
	const [mode, setMode] = useState(true);
	useEffect(() => {
		const theme = localStorage.getItem("DarkMode");
		if (theme === "true") {
			setMode(true);
		} else {
			setMode(false);
			localStorage.setItem("DarkMode", "false");
		}
	}, []);

	const handleModeCLick = () => {
		const theme = localStorage.getItem("DarkMode");
		if (theme === "true") {
			localStorage.setItem("DarkMode", "false");
		} else {
			localStorage.setItem("DarkMode", "true");
		}
		setMode(!mode);
	};
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
					<div id="chat-nav-tooltip" data-tooltip-content={!mode ? "Dark Mode" : "Light Mode"} onClick={handleModeCLick}>
						{mode ? <MdSunny className="big-type-svg" fill={mode ? "#b5bac1" : "#ffffff"} /> : <BsFillMoonStarsFill className="big-type-svg" fill={mode ? "#b5bac1" : "#ffffff"} />}
					</div>
					<div id="chat-nav-tooltip" onClick={handleUserClick} data-tooltip-content={hideUser ? "Show Member List" : "Hide Member List"}>
						<ImUsers className="big-type-svg" fill={hideUser ? "#b5bac1" : "#ffffff"} />
					</div>
				</div>
				<Tooltip anchorSelect="#chat-nav-tooltip" id="tooltip" style={{ fontSize: "13px" }} place="top" render={({ content }) => <span>{content}</span>} />
			</div>
		</section>
	);
};

export default TopNav;
