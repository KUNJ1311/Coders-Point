import React, { useEffect, useState } from "react";
import avatar from "./avatar.svg";
import { useNavigate } from "react-router-dom";
import { IoLockClosed } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { verifyPassword } from "../helper/helper";
import { toast } from "react-toastify";

const Login = ({ OnForget }) => {
	const [credentials, setCredentials] = useState({ email: "", password: "" });
	let Navigate = useNavigate();

	const handleForget = () => {
		OnForget(true);
	};

	//* login user and save token in localstorage
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const { data } = await verifyPassword(credentials);
			localStorage.setItem("coderToken", data.token);
			Navigate("/mainapp");
			toast.info("Logged in successfully..!");
		} catch (error) {
			toast.error("Wrong Credentials..!");
		}
	};

	//* set values of input feild on change
	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};
	return (
		<div className="form-container sign-in-container">
			<form action="#" className="form-login" onSubmit={handleLogin}>
				<h1 className="h">Welcome Back!</h1>
				<span className="ac-line"></span>
				<div className="social-container">
					<img src={avatar} alt="" width="100px" height="100px" />
				</div>
				<div className="infield">
					<MdMail className="icon-login" />
					<input onChange={onChange} type="email" placeholder="Email" name="email" value={credentials.email} />
					<label className="lable-main"></label>
				</div>
				<div className="infield">
					<IoLockClosed className="icon-login" />
					<input onChange={onChange} name="password" type="password" value={credentials.password} placeholder="Password" />
					<label className="lable-main"></label>
				</div>
				<div className="forgot" onClick={handleForget}>
					Forgot Password?
				</div>
				<button type="submit" className="robtn">
					Login In
				</button>
			</form>
		</div>
	);
};

export default Login;
