import React, { useState } from "react";
import { RiUser3Fill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import avatar from "./avatar.svg";

const Signup = ({ OnRegister }) => {
	const handleRegister = () => {
		OnRegister(true);
	};

	return (
		<>
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
					<button className="robtn" onClick={handleRegister}>
						Register
					</button>
				</form>
			</div>
		</>
	);
};

export default Signup;
