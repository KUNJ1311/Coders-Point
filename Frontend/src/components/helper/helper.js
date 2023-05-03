import axios from "axios";

const host = "http://localhost:8080";

//* Make Api Requests

//? authenticate function
export async function authentication(email) {
	try {
		const encodedEmail = encodeURIComponent(email);
		return await axios.post(`${host}/api/authenticate`, { email: encodedEmail });
	} catch (error) {
		return { error: "Email doesn't exist..!" };
	}
}
//? Check user in database
export async function checkUser(email, username) {
	try {
		const { status, data } = await axios.post(`${host}/api/checkuser`, { email, username });
		return { status, msg: data.msg };
	} catch (error) {
		return { error };
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
		return { msg, status };
	} catch (error) {
		return Promise.reject({ error });
	}
};

//? login function
export const verifyPassword = async ({ email, password }) => {
	try {
		if (email) {
			const { data, status } = await axios.post(`${host}/api/login`, { email, password });
			return Promise.resolve({ data, status });
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
		} = await axios.get(`${host}/api/generateOTP`, { params: { email: email } });
		//* send mail with the otp
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

//? generate OTP for new User
export const generateOTPnewUser = async (email) => {
	try {
		const { data, status } = await axios.get(`${host}/api/generateOTP/newuser`);
		//* send mail with the otp
		if (status === 201) {
			let text = data.code;
			let extra = `Hello, here is your OTP. Please use this OTP to complete your registration process.`;
			await axios.post(`${host}/api/registerMail`, { userEmail: email, text, subject: "OTP for registration process", extra });
			return { status, msg: "OTP has been sent to your email." };
		}
	} catch (error) {
		return Promise.reject({ error });
	}
};

//? verify OTP
export const verifyOTP = async ({ email, code }) => {
	try {
		const decodedEmail = decodeURIComponent(email);
		const { data, status } = await axios.get(`${host}/api/verifyOTP`, { params: { decodedEmail, code } });
		return { data, status };
	} catch (error) {
		return Promise.reject(error);
	}
};

//? verify OTP new user
export const verifyOTPnewuser = async ({ code }) => {
	try {
		const { data, status } = await axios.get(`${host}/api/verifyOTP/newuser`, { params: { code } });
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
