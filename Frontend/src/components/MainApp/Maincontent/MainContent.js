import React, { useState } from "react";
import "./maincontent.css";
import TopNav from "./ChatComponents/TopNav";
import ChatArea from "./ChatComponents/ChatArea";
import Users from "./ChatComponents/Users/Users";
import Groups from "../Groups/Groups";
import Discover from "../Discover/Discover";

const MainContent = () => {
	const [hideUser, setHideUser] = useState(false);
	const handleUserClick = () => {
		setHideUser(!hideUser);
	};
	return (
		<div className="d-flex app-font absolute">
			<Groups />
			<Discover />
			<div className="maincontent">
				<TopNav handleUserClick={handleUserClick} hideUser={hideUser} />
				<main>
					<ChatArea />
					<Users hideUser={hideUser} />
				</main>
			</div>
		</div>
	);
};

export default MainContent;
