import React from "react";
import "./Users.css";
import Online from "./Online";
import Offline from "./Offline";

const Users = (props) => {
	return (
		<div className="container_users" style={{ display: props.hideUser ? "none" : "flex" }}>
			<aside className="users_wrap hidden_users">
				<div className="users_box">
					<Online />
					<Offline />
				</div>
			</aside>
		</div>
	);
};

export default Users;
