import React, { useContext, useState } from "react";
import { registerUser, verifyOTPnewuser, verifyPassword } from "../helper/helper";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import { toast } from "react-toastify";

const OTP = (props) => {
	const Navigate = useNavigate();
	const context = useContext(userContext);
	const { credentials } = context;
	const { email, password } = credentials;
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
	const handleVerifyOTP = async (e) => {
		try {
			e.preventDefault();
			const code = otp.join("");
			const { status } = await verifyOTPnewuser({ code });
			if (status === 201) {
				const { msg, status } = await registerUser(credentials);
				if (status === 201) {
					const { data, status } = await verifyPassword({ email, password });
					if (status === 200) {
						localStorage.setItem("coderToken", data.token);
						Navigate("/mainapp");
						toast.info("Congratulations! Your account has been created successfully.");
					}
				}
			}
		} catch (error) {
			toast.error(error.response.data.error || "Request failed..!");
		}
	};
	return (
		<>
			<div className={`form-container ${props.side}`}>
				<form onSubmit={handleVerifyOTP} className="form-OTP">
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
