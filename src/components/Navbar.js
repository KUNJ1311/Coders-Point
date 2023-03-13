import React from "react";
import { Link } from "react-router-dom";
import coders from "./img/coders.png";
function Navbar() {
	return (
		<nav classNameName="navbar" style={{ backgroundColor: "#161819" }}>
			<div classNameName="navbar_logo ml-4">
				<Link to="/">
					<img src={coders} width="179px" height="55px" alt="" />
				</Link>
			</div>
			<div classNameName="navbar_buttons">
				<button classNameName="signupButton mr-3">Sign In</button>
				<button classNameName="loginButton mr-4">Sign Up</button>
			</div>
		</nav>
	);
}

export default Navbar;
