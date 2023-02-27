import React from "react";
import Discover from "./Discover";
import Groups from "./Groups";
import MainContent from "./MainContent";

const MainApp = () => {
	return (
		<div className="display-flex">
			<Groups />
			<Discover />
			<MainContent />
		</div>
	);
};

export default MainApp;
