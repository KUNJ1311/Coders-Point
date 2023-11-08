import React, { useEffect, useState } from "react";
import { HiChatAlt } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();
	const handleHome = () => {
		navigate(`/mainapp`);
	};
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
					<span>General</span>
				</div>
				<div className="toolbar_nav">
					<div data-tooltip-id="my-tooltip" data-tooltip-content="Home Chat" data-tooltip-offset={10} data-tooltip-place="bottom" onClick={handleHome}>
						Home
					</div>
					<div data-tooltip-id="my-tooltip" data-tooltip-content={!mode ? "Dark Mode" : "Light Mode"} data-tooltip-offset={10} data-tooltip-place="bottom" onClick={handleModeCLick}>
						{mode ? <MdSunny className="big-type-svg" fill={mode ? "#b5bac1" : "#ffffff"} /> : <BsFillMoonStarsFill className="big-type-svg" fill={mode ? "#b5bac1" : "#ffffff"} />}
					</div>
					<div data-tooltip-id="my-tooltip" data-tooltip-offset={10} data-tooltip-place="bottom" onClick={handleUserClick} data-tooltip-content={hideUser ? "Show Member List" : "Hide Member List"}>
						<ImUsers className="big-type-svg" fill={hideUser ? "#b5bac1" : "#ffffff"} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopNav;
