import axios from "axios";

//* Make Api Requests

//* authenticate function
export async function authentication(email) {
	try {
		return await axios.post("/api/authenticate", { email });
	} catch (error) {
		return { error: "Email doesn't exist..!" };
	}
}

//* Get User Details
export const getUser = async ({ email }) => {
	try {
		const { data } = await axios.get(`/api/user/${email}`);
		return { data };
	} catch (error) {
		return { error: "Password doesn't Match..!" };
	}
};

//* register user function
