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
		html: `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title>One Time Password</title>
      <style type="text/css">
        body {
          background-color: whitesmoke;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      </style>
    </head>
    
    <body>
      <table width="100%" bgcolor="#f2f2f2">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
              <tr>
                <td style="background-color: #1e1f22; height: 100px; text-align: center;">
                  <a href="coderspoint.in" style="text-decoration: none;">
                    <img src="https://cdn.discordapp.com/attachments/1080048471484157997/1102466976145743892/coders.png" alt="" width="260" height="80">
                  </a>
                </td>
              </tr>
              <tr>
                <td style="background-color: #fff; padding: 50px 20px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                    <tr>
                      <td style="text-align: center;">
                        <img src="https://cdn.discordapp.com/attachments/1080048471484157997/1102466975541772288/lock.png" alt="" width="200">
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: center; font-size: 30px; font-weight: 500; padding: 20px 0;">
                        ${username || ""}, ${extra}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: center; font-size: 20px; font-weight: 500;">
                        One Time Password
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: center; font-family: 'Courier New', Courier, monospace; font-weight: 800; font-size: 40px; letter-spacing: 10px; padding: 20px 0;">
                        ${text}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: center; font-size: 16px; color: gray; padding: 20px 0;">
                        If you did not make this request, just ignore this email.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="background-color: #fff; text-align: right; padding: 20px;">
                  <a href="/" style="text-decoration: none; margin-right: 10px;">
                    <img class="account" src="https://cdn.discordapp.com/attachments/1080048471484157997/1102466975210410044/linkedin.png" alt="" width="40" height="40">
                  </a>
                  <a href="/" style="text-decoration: none;">
                    <img class="account" src="https://cdn.discordapp.com/attachments/1080048471484157997/1102466974908424242/github.png" alt="" width="40" height="40">
                  </a>
                </td>
              </tr>
            </table>
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
