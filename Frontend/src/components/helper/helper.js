import axios from "axios";

const host = "http://localhost:8080";

//* Make Api Requests

//? validateToken
export const validateToken = async (token) => {
	try {
		return await axios.post(`${host}/api/validateToken`, { token });
	} catch (error) {
		return { error: "Token is not valid..!" };
	}
};

//? authenticate function
export async function authentication(email) {
	try {
		const encodedEmail = encodeURIComponent(email);
		return await axios.post(`${host}/api/authenticate`, { email: encodedEmail });
	} catch (error) {
		return { error: "Email doesn't exist..!" };
	}
}

//? Get User Details
export const getUser = async ({ email }) => {
	try {
		const { data } = await axios.get(`${host}/api/user/${email}`);
		return { data };
	} catch (error) {
		return { error: "Password doesn't Match..!" };
	}
};

//? register user function
export const registerUser = async (credentials) => {
	try {
		const {
			data: { msg },
			status,
		} = await axios.post(`${host}/api/register`, credentials);
		let { username, email } = credentials;

		//* send email
		if (status === 201) {
			await axios.post(`${host}/api/registerMail`, { username, userEmail: email, text: msg });
		}
		return Promise.resolve(msg);
	} catch (error) {
		return Promise.reject({ error });
	}
};

//? login function
export const verifyPassword = async ({ email, password }) => {
	try {
		if (email) {
			const { data } = await axios.post(`${host}/api/login`, { email, password });
			return Promise.resolve({ data });
		}
	} catch (error) {
		return Promise.reject({ error: "Password doesn't Match..!" });
	}
};

//? update user function
export const updateUser = async (response) => {
	try {
		const token = localStorage.getItem("token");
		const data = await axios.post(`${host}/api/updateUser`, response, { headers: { Authorization: `Bearer ${token}` } });
		return Promise.resolve({ data });
	} catch (error) {
		return Promise.reject({ error: "Couldn't Update Profile..!" });
	}
};

//? generate OTP
export const generateOTP = async (email) => {
	try {
		const {
			data: { code },
			status,
		} = axios.get(`${host}/api/generateOTP`, { params: { email } });
		//send mail with the otp
		if (status === 201) {
			let {
				data: { username },
			} = await getUser({ email });
			let text = code;
			let extra = `Verify and recover your password.`;
			await axios.post(`${host}/api/registerMail`, { username, userEmail: email, text, subject: "Password recovery OTP", extra });
		}
		return Promise.resolve(code);
	} catch (error) {
		return Promise.reject({ error });
	}
};

//? verify OTP
export const verifyOTP = async ({ email, code }) => {
	try {
		const { data, status } = await axios.get(`${host}/api/verifyOTP`, { params: { email, code } });
		return { data, status };
	} catch (error) {
		return Promise.reject(error);
	}
};

//? reset password
export const resetPassword = async ({ email, passowrd }) => {
	try {
		const { data, status } = await axios.put(`${host}/api/resetPassword`, { email, passowrd });
		return Promise.resolve({ data, status });
	} catch (error) {
		return Promise.reject({ error });
	}
};
