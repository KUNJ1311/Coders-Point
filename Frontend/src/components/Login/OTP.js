import axios from "axios";
import React, { useState } from "react";
import { registerUser, verifyOTPnewuser } from "../helper/helper";
import { Navigate } from "react-router-dom";

const OTP = (props) => {
	const [otp, setOtp] = useState(new Array(6).fill(""));

	const handleChange = (index, e) => {
		const newOtp = [...otp];
		if (e.target.value.length > 1) {
			newOtp[index] = e.target.value.slice(0, 1);
		} else {
			newOtp[index] = e.target.value;
		}
		setOtp(newOtp);
		if (e.target.value !== "" && index < otp.length - 1) {
			e.target.nextElementSibling.focus();
		}
	};

	const handleKeyDown = (index, e) => {
		if (e.key === "Backspace" && index > 0 && otp[index] === "") {
			e.target.previousElementSibling.focus();
		}
	};
	const handleVerify = async () => {
		try {
			const { data } = await verifyOTPnewuser(otp);
			if (data.status === 201) {
				const { data } = registerUser(props.credentials);
				if (data.status === 201) {
					Navigate("/main-app");
					alert(data.msg);
				} else {
					alert("Sorry, the OTP you entered is invalid..!");
				}
			}
		} catch (error) {
			alert("Something went wrong..!");
		}
	};
	return (
		<>
			<div className={`form-container ${props.side}`}>
				<form onSubmit={handleVerify} className="form-OTP">
					<h1 className="h">OTP Verification</h1>
					<span className="ac-line"></span>
					<span className="sm-text pt-5 pb-5">Enter 6 digit OTP sent to your E-mail address.</span>
					<div style={{ display: "flex", alignItems: "center", justifyContent: "start", gap: "10px" }}>
						{otp.map((digit, index) => (
							<input key={index} type="number" maxLength="1" className="otp-input" value={digit} onChange={(e) => handleChange(index, e)} onKeyDown={(e) => handleKeyDown(index, e)} />
						))}
					</div>
					<button className="robtn" style={{ marginTop: "32px" }}>
						Verify
					</button>
					<div className="py-4 resend">
						<span style={{ fontSize: "15px" }}>
							Can't get OTP?
							<span className="text-red" style={{ fontSize: "15px", color: "red" }}>
								{" "}
								Resend
							</span>
						</span>
					</div>
				</form>
			</div>
		</>
	);
};

export default OTP;
