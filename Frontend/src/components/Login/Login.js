import React, { useEffect } from "react";
import avatar from "./avatar.svg";
import { Link } from "react-router-dom";
import { IoLockClosed } from "react-icons/io5";
import { MdMail } from "react-icons/md";

const Login = ({ OnForget }) => {
	const handleForget = () => {
		OnForget(true);
	};

	return (
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
				<div className="forgot" onClick={handleForget}>
					Forgot Password?
				</div>
				<Link to="/mainapp">
					<button className="robtn">Sign In</button>
				</Link>
			</form>
		</div>
	);
};

export default Login;
