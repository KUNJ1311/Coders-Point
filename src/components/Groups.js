import React from "react";
import img from "./img/icon.png";
const Groups = () => {
	return (
		<div className="groups">
			<div className="d-flex align-c justify-c groups-logo mb-8" width="48px" height="48px">
				<div className="d-flex align-c justify-c groups-logo cursor-pointer groups-border">
					<div className="align-c justify-c groups-logo">
						<img className="d-block pr-4" src={img} width="30px" height="37px" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Groups;
