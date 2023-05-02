import React, { useState } from "react";
import { RiUser3Fill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import avatar from "./avatar.svg";
import { useNavigate } from "react-router-dom";
import { generateOTPnewUser } from "../helper/helper";

const Signup = ({ OnRegister }) => {
	const [credentials, setCredentials] = useState({ email: "", password: "", username: "" });
	let Navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const { data } = await generateOTPnewUser(credentials.email);
			if (data.status === 201) {
				OnRegister(true, credentials);
			}
		} catch (error) {
			alert("wrong");
		}
	};
	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	return (
		<>
			<div className="form-container sign-up-container">
				<form onSubmit={handleRegister} className="form-login">
					<h1 className="h">Create Account</h1>
					<span className="ac-line"></span>
					<div className="social-container">
						<img src={avatar} alt="" width="100px" height="100px" />
					</div>
					<div className="infield">
						<RiUser3Fill className="icon-login" />
						<input type="text" onChange={onChange} value={credentials.username} name="username" placeholder="Username" />
						<label></label>
					</div>
					<div className="infield">
						<MdMail className="icon-login" />
						<input type="email" onChange={onChange} value={credentials.email} placeholder="Email" name="email" />
						<label></label>
					</div>
					<div className="infield">
						<IoLockClosed className="icon-login" />
						<input type="password" onChange={onChange} value={credentials.password} name="password" placeholder="Password" />
						<label></label>
					</div>
					<button className="robtn" type="submit">
						Register
					</button>
				</form>
			</div>
		</>
	);
};

export default Signup;
