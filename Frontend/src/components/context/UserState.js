import { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
	return <UserContext.Provider value={{}}>{props.children}</UserContext.Provider>;
};
export default UserState;
