import React from "react";
import { MdMail } from "react-icons/md";

const ForgetPass = ({ OnSend }) => {
	const handleSend = () => {
		OnSend(true);
	};
	return (
		<>
			<div className="form-container sign-in-container">
				<form action="#" className="form-login">
					<h1 className="h">Forget Password</h1>
					<span className="ac-line"></span>
					<span className="sm-text pt-5 pb-2">Enter your E-mail address.</span>
					<div className="infield">
						<MdMail className="icon-login" />
						<input type="email" placeholder="Email" name="email" />
						<label></label>
					</div>
					<button className="robtn" onClick={handleSend} style={{ marginTop: "15px" }}>
						Send OTP
					</button>
				</form>
			</div>
		</>
	);
};

export default ForgetPass;
