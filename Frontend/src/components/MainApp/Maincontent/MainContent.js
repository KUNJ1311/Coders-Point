import React, { useState } from "react";
import "./maincontent.css";
import TopNav from "./ChatComponents/TopNav";
import ChatArea from "./ChatComponents/ChatArea";
import Users from "./ChatComponents/Users/Users";
// import { userData } from "../../helper/helper";

const MainContent = () => {
	// const [adduserData, setAddUserData] = useState(null);

	// //* Getting user data
	// useEffect(() => {
	// 	const GetData = async () => {
	// 		try {
	// 			const { data, status } = await userData();
	// 			if (status === 201) {
	// 				setAddUserData(data);
	// 			}
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	GetData();
	// }, []);

	const [hideUser, setHideUser] = useState(false);
	const handleUserClick = () => {
		setHideUser(!hideUser);
	};
	return (
		<>
			<div className="maincontent">
				<TopNav handleUserClick={handleUserClick} hideUser={hideUser} />
				<main>
					<ChatArea />
					<Users hideUser={hideUser} />
				</main>
			</div>
		</>
	);
};

export default MainContent;
