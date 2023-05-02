import { useState } from "react";
import UserContext from "./userContext";
import { checkUser, generateOTPnewUser } from "../helper/helper";

const UserState = (props) => {
	const [credentials, setCredentials] = useState({ email: "", password: "", username: "" });
	const Register = async ({ OnRegister }) => {
		try {
			const response = await checkUser(credentials.email, credentials.username);
			if (response.status === 200) {
				const { status } = await generateOTPnewUser(credentials.email);
				if (status === 201) {
					OnRegister(true);
				} else {
					return console.log(status);
				}
			} else {
				return alert(response.error.response.data.msg);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return <UserContext.Provider value={{ credentials, setCredentials, Register }}>{props.children}</UserContext.Provider>;
};
export default UserState;
