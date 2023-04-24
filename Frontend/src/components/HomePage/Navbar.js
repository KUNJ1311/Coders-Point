import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import coders from "../Image/coders.png";
import Login from "../Login/Login";
function Navbar() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};
	const modalRef = useRef();

	const handleCloseModal = () => {
		setShowModal(false);
	};

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				handleCloseModal();
			}
		};

		const handleOutsideClick = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				handleCloseModal();
			}
		};

		if (showModal) {
			document.addEventListener("keydown", handleKeyDown);
			document.addEventListener("mousedown", handleOutsideClick);
		} else {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("mousedown", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("mousedown", handleOutsideClick);
		};
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
			{showModal && <Login onClose={handleCloseModal} />}
		</>
	);
}

export default Navbar;
