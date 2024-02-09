import React from "react";
import "./Users.css";
import Online from "./Online";
import Offline from "./Offline";
import { useSelector } from "react-redux";
const Users = (props) => {
	const mode = useSelector((state) => state.themeKey);
	return (
		<div className={"container_users " + (mode ? "" : "darkok")} style={{ display: props.hideUser ? "none" : "flex" }}>
			<aside className={"users_wrap hidden_users " + (mode ? "" : "darkok")}>
				<div className={"users_box " + (mode ? "" : "userbox-dark")}>
					<Online />
					<Offline />
				</div>
			</aside>
		</div>
	);
};

export default Users;
