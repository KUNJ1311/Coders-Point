import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import coders from "../Image/coders.png";
import MainModal from "../Login/MainModal";
function Navbar() {
	const [showModal, setShowModal] = useState(false);

	//* Get Started to login
	const handleClick = () => {
		setShowModal(true);
	};

	//* Close login page
	const handleCloseModal = () => {
		setShowModal(false);
	};

	//* Close login page with ESC Key
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				handleCloseModal();
			}
		};
		if (showModal) {
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("keydown", handleKeyDown);
		}
	}, [showModal]);

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
			{showModal && <MainModal onClose={handleCloseModal} />}
		</>
	);
}

export default Navbar;
