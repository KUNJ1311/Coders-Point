import React, { useEffect, useState } from "react";
import "./maincontent.css";
import TopNav from "./ChatComponents/TopNav";
import ChatArea from "./ChatComponents/ChatArea";
import Users from "./ChatComponents/Users/Users";
import Groups from "../Groups/Groups";
import Discover from "../Discover/Discover";
import { useParams } from "react-router-dom";

const MainContent = () => {
	const [hideUser, setHideUser] = useState(false);
	const handleUserClick = () => {
		setHideUser(!hideUser);
	};
	const { _id } = useParams();
	// const [clickedId, setClickedId] = useState(null);
	const [chat_id, chat_name] = _id.split("&");
	useEffect(() => {
		if (!_id) {
			return;
		}
		// setClickedId(chat_id);
	}, [_id]);

	return (
		<div className="d-flex app-font absolute">
			<Groups chat_id={chat_id} />
			<Discover chat_name={chat_name} />
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
