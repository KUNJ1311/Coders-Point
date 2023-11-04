import React from "react";
import coder from "../../../../Image/facebook.png";

const Online = () => {
	return (
		<>
			<h3>
				<span>Online — 1</span>
			</h3>
			<div className="members_div">
				<div className="members_box">
					<div className="users_avatar">
						<div>
							<img src={coder} alt="" width="32px" height="32px" />
						</div>
					</div>
					<div className="users_name">
						<div className="users_name_text">
							<div>
								<span>Kunj Faladu</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Online;