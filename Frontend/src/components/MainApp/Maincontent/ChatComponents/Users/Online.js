import React from "react";
import coder from "../../../../Image/facebook.png";
import { useSelector } from "react-redux";

const Online = () => {
	const mode = useSelector((state) => state.themeKey);
	return (
		<>
			<h3>
				<span className={mode ? "" : "darkfont"}>Online — 1</span>
			</h3>
			<div className={"members_div " + (mode ? "" : "darkfont members_div_light")}>
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
