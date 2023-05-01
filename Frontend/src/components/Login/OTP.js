import React, { useState } from "react";

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
	return (
		<>
			<div className={`form-container ${props.side}`}>
				<form action="#" className="form-OTP">
					<h1 className="h">OTP Verification</h1>
					<span className="ac-line"></span>
					<span className="sm-text pt-5 pb-5">Enter 6 digit OTP sent to your E-mail address.</span>
					<div style={{ display: "flex", alignItems: "center", justifyContent: "start", gap: "10px" }}>
						{otp.map((digit, index) => (
							<input key={index} type="number" maxLength="1" className="otp-input" value={digit} onChange={(e) => handleChange(index, e)} onKeyDown={(e) => handleKeyDown(index, e)} />
						))}
					</div>
					<button className="robtn" style={{ marginTop: "32px" }} onClick={props.handleVerify}>
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
