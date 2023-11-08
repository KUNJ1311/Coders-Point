import { Navigate } from "react-router-dom";

export const AuthorizeUser = ({ children }) => {
	const data = localStorage.getItem("userdata");
	const userdata = JSON.parse(data);
	if (!userdata.token) {
		return <Navigate to={"/"} replace={true} />;
	}
	return children;
};
