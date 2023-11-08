import React, { useEffect, useState } from "react";
import { HiChatAlt } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../Features/themeSlice";
const TopNav = (props) => {
	const [modeStore, setModeStore] = useState(true);
	const dispatch = useDispatch();
	const mode = useSelector((state) => state.themeKey);
	const { hideUser, handleUserClick } = props;
	useEffect(() => {
		const theme = localStorage.getItem("DarkMode");
		if (theme === "true") {
			setModeStore(true);
		} else {
			setModeStore(false);
			localStorage.setItem("DarkMode", "false");
		}
	}, []);
	const navigate = useNavigate();
	const handleHome = () => {
		navigate(`/mainapp`);
	};
	const handleModeCLick = () => {
		dispatch(toggleTheme());
		const theme = localStorage.getItem("DarkMode");
		if (theme === "true") {
			localStorage.setItem("DarkMode", "false");
		} else {
			localStorage.setItem("DarkMode", "true");
		}
		setModeStore(!modeStore);
	};
	return (
		<section className={"align-c d-flex " + (mode ? "" : "jjj slect")}>
			<div className={"relative children_nav " + (mode ? "" : "dark")}>
				<div className={"maincontent-title " + (mode ? "" : "dark")}>
					<div>
						<HiChatAlt className="big-type-svg ok" fill="#b5bac1" />
					</div>
					<span>General</span>
				</div>
				<div className="toolbar_nav">
					<div data-tooltip-id="my-tooltip" data-tooltip-content="Home Chat" data-tooltip-offset={10} data-tooltip-place="bottom" onClick={handleHome}>
						Home
					</div>
					<div data-tooltip-id="my-tooltip" data-tooltip-content={!modeStore ? "Dark Mode" : "Light Mode"} data-tooltip-offset={10} data-tooltip-place="bottom" onClick={handleModeCLick}>
						{modeStore ? <MdSunny className="big-type-svg" fill={modeStore ? "gray" : "#ffffff"} /> : <BsFillMoonStarsFill className="big-type-svg" fill={modeStore ? "gray" : "white"} />}
					</div>
					<div data-tooltip-id="my-tooltip" data-tooltip-offset={10} data-tooltip-place="bottom" onClick={handleUserClick} data-tooltip-content={hideUser ? "Show Member List" : "Hide Member List"}>
						<ImUsers className={"big-type-svg " + (mode ? "" : "ok")} fill={hideUser ? "#b5bac1" : "#ffffff"} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopNav;
