import { Navigate } from "react-router-dom";

export const AuthorizeUser = ({ children }) => {
	const data = localStorage.getItem("userdata");
	if (!data) {
		return <Navigate to={"/"} replace={true} />;
	}
	return children;
};
