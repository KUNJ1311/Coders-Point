import React, { useEffect } from "react";
import Discover from "./Discover";
import Groups from "./Groups";
import MainContent from "./MainContent";
import { useNavigate } from "react-router-dom";
import { validateToken } from "../helper/helper";

const MainApp = () => {
	const Navigate = useNavigate();
	useEffect(() => {
		async function checkToken() {
			const token = localStorage.getItem("coderToken");
			if (!token) {
				Navigate("/");
			} else {
				const response = await validateToken(token);
				if (response.status !== 200) {
					Navigate("/");
					localStorage.removeItem("coderToken");
				}
			}
		}
		checkToken();
	});
	return (
		<div className="d-flex">
			<Groups />
			<Discover />
			<MainContent />
		</div>
	);
};

export default MainApp;
