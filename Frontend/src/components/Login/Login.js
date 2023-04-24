import React, { useState } from "react";
import "./login.css";
import avatar from "./avatar.svg";
import { Link } from "react-router-dom";
import { RiUser3Fill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
export default function Login({ onClose }) {
	const [isActive, setIsActive] = useState(false);
	const [isScaled, setIsScaled] = useState(false);
	function togglePanel() {
		setIsActive(!isActive);
		setIsScaled(!isScaled);
	}
	return (
		<>
			<section className="sec" onClick={onClose}>
				<div className={`container ${isActive ? "right-panel-active" : ""}`} id="container" onClick={(e) => e.stopPropagation()}>
					<div className="form-container sign-up-container">
						<form action="#" className="form-login">
							<h1 className="h">Create Account</h1>
							<span className="ac-line"></span>
							<div className="social-container">
								<img src={avatar} alt="" width="100px" height="100px" />
							</div>
							<div className="infield">
								<RiUser3Fill className="icon-login" />
								<input type="text" placeholder="Username" />
								<label></label>
							</div>
							<div className="infield">
								<MdMail className="icon-login" />
								<input type="email" placeholder="Email" name="email" />
								<label></label>
							</div>
							<div className="infield">
								<IoLockClosed className="icon-login" />
								<input type="password" placeholder="Password" />
								<label></label>
							</div>
							<button className="robtn">Register</button>
						</form>
					</div>
					<div className="form-container sign-in-container">
						<form action="#" className="form-login">
							<h1 className="h">Welcome Back!</h1>
							<span className="ac-line"></span>
							<div className="social-container">
								<img src={avatar} alt="" width="100px" height="100px" />
							</div>
							<div className="infield">
								<MdMail className="icon-login" />
								<input type="email" placeholder="Email" name="email" />
								<label className="lable-main"></label>
							</div>
							<div className="infield">
								<IoLockClosed className="icon-login" />
								<input type="password" placeholder="Password" />
								<label className="lable-main"></label>
							</div>
							<Link href="#" className="forgot">
								Forgot Password?
							</Link>
							<button className="robtn">Sign In</button>
						</form>
					</div>
					<div className="overlay-container" id="overlayCon">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1 className="h">Welcome Back!</h1>
								<p>To keep connected with us please login with your personal info</p>
								<button className="robtn">Sign In</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h1 className="h">Hello, Friend!</h1>
								<p>Enter your personal details and start journey with us</p>
								<button className="robtn">Register</button>
							</div>
						</div>
						<button className="overlayBtn" onClick={togglePanel} id="overlayBtn"></button>
					</div>
				</div>
			</section>
		</>
	);
}
