import UserModal from "../model/User.modal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ENV from "../config.js";

//* middleware for verify user
export async function verifyUser(req, res, next) {
	try {
		const { email } = req.method == "GET" ? req.query : req.body;
		const decodedEmail = decodeURIComponent(email);
		//* check the user existance
		let exist = await UserModal.findOne({ decodedEmail });
		if (!exist) {
			return res.status(404).send({ error: "Can't Find User!" });
		}
		next();
	} catch (error) {
		return res.status(404).send(error);
	}
}

//* validateToken for redirect user to main app
export async function validateToken(req, res) {
	const token = req.body.token;
	try {
		jwt.verify(token, ENV.JWT_SECRET);
		return res.status(200).send({ message: "Token is valid." });
	} catch (error) {
		return res.status(401).send({ error: "Token is invalid." });
	}
}

//? POST: http://localhost:8080/api/register
export async function register(req, res) {
	try {
		const { username, email, password } = req.body;

		//* check the existing user
		const existUsername = await UserModal.findOne({ username });
		if (existUsername) {
			return res.status(400).json({ error: "Sorry a user with this Username is already exists" });
		}

		//* check the existing email
		const existEmail = await UserModal.findOne({ email });
		if (existEmail) {
			return res.status(400).json({ error: "Sorry E-mail Id is already exists" });
		}

		if (password) {
			const hashedPassword = await bcrypt.hash(password, 10);

			const user = new UserModal({
				username,
				password: hashedPassword,
				email,
			});

			//* return save result as a response
			await user.save();
			res.status(201).send({ msg: "User Register Successfully" });
		}
	} catch (error) {
		return res.status(500).send(error);
	}
}

//? POST: http://localhost:8080/api/login
export async function login(req, res) {
	const { email, password } = req.body;
	try {
		const user = await UserModal.findOne({ email });
		const passwordCheck = await bcrypt.compare(password, user.password);
		if (!passwordCheck) {
			return res.status(400).send({ error: "Don't have Password" });
		}
		//* create jwt token
		const token = jwt.sign(
			{
				userId: user.id,
				email: user.email,
			},
			ENV.JWT_SECRET,
			{ expiresIn: "24h" }
		);
		return res.status(200).send({
			msg: "Login Successful...!",
			username: user.username,
			email: user.email,
			token,
		});
	} catch (error) {
		return res.status(500).send({ error });
	}
}

//? GET: http://localhost:8080/api/user/user123
export async function getUser(req, res) {
	try {
		const { username } = req.params;
		const decodedUsername = decodeURIComponent(username);
		const user = await UserModal.findOne({ decodedUsername });
		if (!user) {
			return res.status(500).send({ error: "Couldn't Find User" });
		}
		//! remove password from user JSON
		const { password, ...rest } = Object.assign({}, user.toJSON());
		return res.status(201).send(rest);
	} catch (error) {
		return res.status(404).send({ error });
	}
}

//? PUT: http://localhost:8080/api/updateUser
export async function updateUser(req, res) {
	try {
		const { userId } = req.user;
		console.log(userId);
		if (userId) {
			const body = req.body;
			//* update the data
			const result = await UserModal.updateOne({ _id: userId }, body);
			if (result.nModified === 0) {
				return res.status(404).send({ error: "User not found" });
			}
			return res.status(201).send({ msg: "Record Updated..!" });
		} else {
			return res.status(401).send({ error: "User Not Found...!" });
		}
	} catch (error) {
		return res.status(401).send(error);
	}
}

//? GET: http://localhost:8080/api/generateOTP
export async function generateOTP(req, res) {
	//* Generate a random 6-digit number
	req.app.locals.OTP = Math.floor(100000 + Math.random() * 900000);
	res.status(201).send({ code: req.app.locals.OTP });
}

//? GET: http://localhost:8080/api/verifyOTP
export async function verifyOTP(req, res) {
	const { code } = req.query;
	if (parseInt(req.app.locals.OTP) === parseInt(code)) {
		req.app.locals.OTP = null; //* reset OTP value
		req.app.locals.resetSession = true; //* start session for the reset password
		return res.status(201).send({ msg: "Verified Successfully!" });
	}
	return res.status(400).send({ error: "Invalid OTP" });
}

//* successfully redirect user when OTP is valid
//? GET: http://localhost:8080/api/createResetSession
export async function createResetSession(req, res) {
	if (req.app.locals) {
		req.app.locals.resetSession = false; //* allow access to this route only once
		return res.status(201).send({ msg: "Access Granted!" });
	}
	return res.status(440).send({ error: "Session Expried!" });
}

//* update the password when we have valid session
//? PUT http://localhost:8080/api/resetPassword
export async function resetPassword(req, res) {
	try {
		if (!req.app.locals.resetSession) {
			return res.status(440).send({ error: "Session Expried!" });
		}
		const { email, password } = req.body;
		try {
			const user = await UserModal.findOne({ email });
			const hashedPassword = await bcrypt.hash(password, 10);
			await UserModal.updateOne({ username: user.username }, { password: hashedPassword });
			req.app.locals.resetSession = false; //* reset session
			res.status(201).send({ msg: "Record Updated Successfully" });
		} catch (error) {
			return res.status(404).send({ error: "email not Found" });
		}
	} catch (error) {
		return res.status(401).send({ error });
	}
}
