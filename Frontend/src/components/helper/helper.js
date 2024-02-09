import axios from "axios";
import { getRandomLightColor } from "../../genColor";

// const host = "http://localhost:8080";
const host = "http://192.168.202.101:8080";

//? send Host
export const sendHost = () => {
	try {
		return { host };
	} catch (error) {
		console.error(error);
	}
};

//* Make Api Requests

//? authenticate function
export async function authentication(email) {
	try {
		return await axios.post(`${host}/api/authenticate`, { email });
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
		} = await axios.post(`${host}/api/register`, {
			credentials,
			avatar: null, // Replace with the image if available
			color: getRandomLightColor(),
		});
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
export const updateUser = async (data, msg) => {
	const localStorageData = JSON.parse(localStorage.getItem("userdata"));
	const token = localStorageData.token;
	try {
		const ndata = await axios.post(`${host}/api/updateUser`, data, msg, { headers: { Authorization: `Bearer ${token}` } });
		return Promise.resolve({ ndata });
	} catch (error) {
		return Promise.reject({ error: "Couldn't Update Profile..!" });
	}
};

//? generate OTP
export const generateOTP = async (email) => {
	try {
		const {
			status,
			data: { code, username },
		} = await axios.get(`${host}/api/generateOTP`, { params: { email } });
		//* send mail with the otp
		if (status === 201) {
			let text = code;
			let extra = `verify and change your password.`;
			await axios.post(`${host}/api/registerMail`, { username, userEmail: email, text, subject: "Password Reset OTP Request", extra });
		}
		return { msg: "Success" };
	} catch (error) {
		return Promise.reject(error);
	}
};

//? generate OTP for new User
export const generateOTPnewUser = async (email) => {
	try {
		const {
			status,
			data: { code },
		} = await axios.get(`${host}/api/generateOTP/newUser`, { params: { email } });
		//* send mail with the otp
		if (status === 201) {
			let text = code;
			let extra = `complete your registration process.`;
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
		const { data, status } = await axios.get(`${host}/api/verifyOTP`, { params: { email, code } });
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
export const resetPassword = async ({ email, password }) => {
	try {
		const { data, status } = await axios.put(`${host}/api/resetPassword`, { email, password });
		return Promise.resolve({ data, status });
	} catch (error) {
		return Promise.reject({ error });
	}
};

//? get user data
export const userData = async () => {
	const localStorageData = JSON.parse(localStorage.getItem("userdata"));
	const token = localStorageData.token;
	try {
		const { data, msg, status } = await axios.get(`${host}/api/userdata`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return Promise.resolve({ data, msg, status });
	} catch (error) {
		return Promise.reject({ error });
	}
};

//? send message
export const sendMessage = async (messageContent, chat_id) => {
	const localStorageData = JSON.parse(localStorage.getItem("userdata"));
	const token = localStorageData.token;
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const data = await axios.post(
			`${host}/message/`,
			{
				content: messageContent,
				chatId: chat_id,
			},
			config
		);
		return Promise.resolve({ data });
	} catch (error) {
		return Promise.reject({ error });
	}
};

//? fetch message
export const fetchMessage = async (chat_id) => {
	const localStorageData = JSON.parse(localStorage.getItem("userdata"));
	const token = localStorageData.token;
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const { data } = await axios.get(`${host}/message/` + chat_id, config);
		return Promise.resolve({ data });
	} catch (error) {
		return Promise.reject({ error });
	}
};

//? fetch groups
export const fetchGroups = async () => {
	const localStorageData = JSON.parse(localStorage.getItem("userdata"));
	const token = localStorageData.token;
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const { data } = await axios.get(`${host}/chat/fetchGroups`, config);
		return Promise.resolve({ data });
	} catch (error) {
		return Promise.reject({ error });
	}
};

//? create Group
export const createChatGroup = async (userData, groupName) => {
	try {
		const config = {
			headers: {
				Authorization: `Bearer ${userData.token}`,
			},
		};

		const { status } = await axios.post(
			`${host}/chat/createGroup`,
			{
				name: groupName,
				img: null, // Replace with the image if available
				color: getRandomLightColor(),
				users: ["649126aee67217ae620c4269", "6517d9a37aa4a9847038b65e"],
			},
			config
		);
		return Promise.resolve({ status });
	} catch (error) {
		return Promise.reject({ error });
	}
};
