import nodemailer from "nodemailer";
import ENV from "../config.js";

let config = {
	service: "gmail",
	auth: {
		user: ENV.EMAIL,
		pass: ENV.PASSWORD,
	},
};
let transporter = nodemailer.createTransport(config);

//? POST: http://localhost:8080/api/registerMail
//* send mail from real gmail account
export const registerMail = async (req, res) => {
	const { username, userEmail, text, subject, extra } = req.body;
	let message = {
		from: ENV.EMAIL,
		to: userEmail,
		subject: subject || "OTP By Coders Point",
		html: `
		<!DOCTYPE html>
		<html lang="en">
		
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Static Template</title>
		
			<style>
				/* Default styles for the logo and text */
				@media only screen and (max-width: 500px) {
					/* Media query for screens with a width of 600px or less */
					/* Reduce the logo size */
					#logo {
						width: 100px;
						height: auto;
						padding: 10px auto;
					}
					#table-h{
						height:150px !important;
					}
					/* Reduce the font size of the text */
					#text {
						font-size: 20px !important;
					}
				}
			</style>
		</head>
		
		<body style="margin: 0; font-family: 'Poppins', sans-serif; background: #ffffff; font-size: 14px;">
			<header style="text-align: center; width: 100%; max-height: 0; position: relative;">
				<table id="table-h" style="height: 165px;  margin: 0 auto;">
					<tbody>
						<tr style="vertical-align: bottom;">
							<td>
								<a href="" target="_blank">
									<img id="logo" style="background: rgb(40, 40, 53); padding: 15px 55px; border-radius: 100px" src="https://cdn.discordapp.com/attachments/1019824883577925703/1234522122437529600/60ce0fb9-998a-4458-ae4c-56236e9d8bdd.png?ex=663109d2&is=662fb852&hm=9719829326f6d2b53d902362bb559b4b4bb883ee90badee5c77e4ca7644e2d7a&" alt="Coders Point" width="200px" height="60px" />
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</header>
			<div style="
				max-width: 680px;
				margin: 0 auto;
				padding: 45px 30px 60px;
				background: #f4f7ff;
				background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
				background-repeat: no-repeat;
				background-size: 800px 452px;
				background-position: top center;
				font-size: 14px;
				color: #434343;
			">
				<main>
					<div style="margin: 0; margin-top: 70px; padding: 92px 30px 115px; background: #ffffff; border-radius: 30px; text-align: center;">
						<div style="width: 100%; max-width: 489px; margin: 0 auto;">
							<h1 style="margin: 0; font-size: 24px; font-weight: 500; color: #1f1f1f;">Your One Time Password</h1>
							<p style="margin: 0; margin-top: 17px; font-size: 16px; font-weight: 500;">Hey${username ? " " + username + "," : ""}</p>
							<p style="margin: 0; margin-top: 17px; font-weight: 500; letter-spacing: 0.56px;">
								Thank you for choosing Coders Point.Use the following OTP to ${extra}OTP is valid for <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>.Do not share this code with others.
							</p>
							<p id="text" style="margin: 0; margin-top: 60px; font-size: 40px; font-weight: 600; letter-spacing: 10px; color: #499fb6;"> ${text}</p>
						</div>
					</div>
					<p style="max-width: 400px; margin: 0 auto; margin-top: 90px; text-align: center; font-weight: 500; color: #8c8c8c;">
						Need help? Ask at <a href="mailto:coderspoint.in@gmail.com" style="color: #499fb6; text-decoration: none;">coderspoint.in@gmail.com</a> or visit our <a href="#" target="_blank" style="color: #499fb6; text-decoration: none;">Help Center</a>
					</p>
				</main>
				<footer style="text-align: center; border-top: 1px solid #e6ebf1; width: 100%; max-width: 490px; margin: 20px auto 0;">
					<p style="margin: 0; margin-top: 40px; font-size: 16px; font-weight: 600; color: #434343;">Coders Point</p>
					<p style="margin: 0; margin-top: 8px; color: #434343;">Address 540, City, State.</p>
					<div style="margin: 0; margin-top: 16px;">
						<a href="#" target="_blank" style="display: inline-block;"><img width="36px" alt="Facebook" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook" /></a>
						<a href="#" target="_blank" style="display: inline-block; margin-left: 8px;"><img width="36px" alt="Instagram" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram" /></a>
						<a href="#" target="_blank" style="display: inline-block; margin-left: 8px;"><img width="36px" alt="Twitter" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter" /></a>
						<a href="#" target="_blank" style="display: inline-block; margin-left: 8px;"><img width="36px" alt="Youtube" src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube" /></a>
					</div>
					<p style="margin: 0; margin-top: 16px; color: #434343;">Copyright © 2022 Company. All rights reserved.</p>
				</footer>
			</div>
		</body>
		
		</html>		
		`,
	};
	transporter
		.sendMail(message)
		.then(() => {
			return res.status(201).json({
				msg: "you should receive an email",
			});
		})
		.catch((error) => {
			return res.status(500).json({ error });
		});
};
