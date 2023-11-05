import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import coders from "../Image/coders.png";
import MainModel from "../Login/MainModel";
function Navbar() {
	const [showModel, setShowModel] = useState(false);

	//* Get Started to login
	const handleClick = () => {
		setShowModel(true);
	};

	//* Close login page
	const handleCloseModel = () => {
		setShowModel(false);
	};

	//* Close login page with ESC Key
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				handleCloseModel();
			}
		};
		if (showModel) {
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("keydown", handleKeyDown);
		}
	}, [showModel]);

	return (
		<>
			<nav className="navbar" style={{ backgroundColor: "#161819" }}>
				<div className="navbar_logo ml-4">
					<Link to="/">
						<img src={coders} width="179px" height="55px" alt="" />
					</Link>
				</div>
				<div className="navbar_buttons">
					<button className="signupButton mr-3" onClick={handleClick}>
						Get Started
					</button>
				</div>
			</nav>
			{showModel && <MainModel onClose={handleCloseModel} />}
		</>
	);
}

export default Navbar;
