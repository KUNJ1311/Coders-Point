import React from "react";
import coder from "../../../../Image/twitter.png";
import coder2 from "../../../../Image/instal.webp";
import { useSelector } from "react-redux";

const Offline = () => {
	const mode = useSelector((state) => state.themeKey);
	return (
		<>
			<h3>
				<span className={mode ? "" : "darkfont"}>Offline — 2</span>
			</h3>
			<div className={"members_div offline_member" + (mode ? "" : "darkfont members_div_light")}>
				<div className="members_box">
					<div className="users_avatar">
						<div>
							<img src={coder} alt="" width="32px" height="32px" />
						</div>
					</div>
					<div className="users_name">
						<div className="users_name_text">
							<div>
								<span>Unknown</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={"members_div offline_member" + (mode ? "" : "darkfont members_div_light")}>
				<div className="members_box">
					<div className="users_avatar">
						<div>
							<img src={coder2} alt="" width="32px" height="32px" />
						</div>
					</div>
					<div className="users_name">
						<div className="users_name_text">
							<div>
								<span>Jethalal</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Offline;
