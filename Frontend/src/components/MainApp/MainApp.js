import React from "react";
import Discover from "./Discover/Discover";
import Groups from "./Groups/Groups";
import MainContent from "./Maincontent/MainContent";
import "./Groups/groups.css";
import "./Discover/discover.css";
import "./Maincontent/maincontent.css";

const MainApp = () => {
	return (
		<div className="d-flex">
			<Groups />
			<Discover />
			<MainContent />
		</div>
	);
};

export default MainApp;
