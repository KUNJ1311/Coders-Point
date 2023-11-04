import React from "react";
import Discover from "./Discover/Discover";
import Groups from "./Groups/Groups";
import MainContent from "./Maincontent/MainContent";
// import UserProfile from "./UserProfile/Profile";
import Profile4 from "./Profile4";
import "./Groups/groups.css";
import "./Discover/discover.css";
import "./Maincontent/maincontent.css";
// import "./UserProfile/UserProfile.css";
// import "./UserProfile/Profile3.css"


const MainApp = () => {
	return (
		<div className="d-flex app-font absolute">
			{/* <Groups /> */}
			{/* <Discover /> */}
			{/* <MainContent /> */}
			{/* <UserProfile /> */}
			<Profile4 />
			


		</div>
	);
};

export default MainApp;
