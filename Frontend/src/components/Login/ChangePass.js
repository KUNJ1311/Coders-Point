import React from "react";
import { IoLockClosed } from "react-icons/io5";

const ChangePass = ({ OnChangePass }) => {
	const ChangePass = () => {
		OnChangePass(true);
	};
	return (
		<>
			<div className="form-container sign-in-container">
				<form action="#" className="form-login">
					<h1 className="h">Change Password</h1>
					<span className="ac-line mb-4"></span>
					<div className="infield">
						<IoLockClosed className="icon-login" />
						<input type="password" placeholder="New Password" />
						<label></label>
					</div>
					<div className="infield mb-4">
						<IoLockClosed className="icon-login" />
						<input type="password" placeholder="Confirm Password" />
						<label></label>
					</div>
					<button className="robtn" onClick={ChangePass}>
						Change
					</button>
				</form>
			</div>
		</>
	);
};

export default ChangePass;
