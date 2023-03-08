import React from "react";
import { Link } from "react-router-dom";
import coders from "./img/coders.png";
function Navbar() {
	return (
		<nav className="navbar" style={{ backgroundColor: "#161819" }}>
			<div className="navbar_logo ml-4">
				<Link to="/">
					<img src={coders} width="179px" height="55px" alt="" />
				</Link>
			</div>
			<div className="navbar_buttons">
				<button className="signupButton mr-3">Sign In</button>
				<button className="loginButton mr-4">Sign Up</button>
			</div>
		</nav>
	);
}

export default Navbar;
