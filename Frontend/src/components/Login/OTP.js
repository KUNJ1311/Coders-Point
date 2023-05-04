import React, { useContext, useState } from "react";
import { generateOTP, registerUser, verifyOTP, verifyOTPnewuser, verifyPassword } from "../helper/helper";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import { toast } from "react-toastify";

const OTP = (props) => {
	const Navigate = useNavigate();
	const context = useContext(userContext);
	const { credentials } = context;
	const { email, password } = credentials;
	const [otp, setOtp] = useState(new Array(6).fill(""));
	const [timer, setTimer] = useState(100);
	const [resendDisabled, setResendDisabled] = useState(false);

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
		const code = otp.join("");
		if (props.side === "sign-up-container") {
			try {
				e.preventDefault();
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
		} else if (props.side === "sign-in-container") {
			try {
				e.preventDefault();
				const { status } = await verifyOTP({ email, code });
				if (status === 200) {
					toast.success("Verifed Successfully..!");
					props.handleVerify(true);
				}
			} catch (error) {
				toast.error(error.response.data.error || "Request Failed..!");
			}
		} else {
			toast.error("Internal Server Error..!");
		}
	};

	const startTimer = async (e) => {
		e.preventDefault();
		//* Disable the "Resend" button
		setResendDisabled(true);

		//* Start the timer
		const intervalId = setInterval(() => {
			setTimer((prevTimer) => prevTimer - 1);
		}, 1000);

		setTimeout(() => {
			clearInterval(intervalId);
			setTimer(100);
			setResendDisabled(false);
		}, 100000);

		//* Re-Generate OTP
		await toast.promise(generateOTP(email), {
			pending: "Sending OTP to your email...",
			success: "Success! Your OTP has been sent.",
			error: "Unable to send OTP. Please try again..",
		});
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
						{resendDisabled ? (
							<span style={{ fontSize: "15px" }}>
								You can request a new OTP after <span style={{ color: "red" }}>{timer}s</span>.
							</span>
						) : (
							<span style={{ fontSize: "15px" }}>
								Can't get OTP?
								<span className="text-red" style={{ fontSize: "15px", color: "red" }} onClick={startTimer}>
									{" "}
									Resend
								</span>
							</span>
						)}
					</div>
				</form>
			</div>
		</>
	);
};

export default OTP;
