import React from "react";
import img from "./img/icon.png";
import img1 from "./img/test.jpg";
const Groups = () => {
	const groups = [img1, img1, img1, img1, img1];
	return (
		<div className="groups">
			{/* Home */}
			<div className="d-flex align-c justify-c mb-2" width="48px" height="48px">
				<div className="d-flex align-c justify-c  cursor-pointer groups-border">
					<div className="align-c justify-c ">
						<img className="d-block pr-1" src={img} width="30px" height="37px" alt="" />
					</div>
				</div>
			</div>
			{/* line */}
			<div className="d-flex justify-c sm-line ">
				<div className="sm-line-v"></div>
			</div>
			{/* Servers */}
			<div className="d-flex flex-col w-full align-c ">
				{groups.map((group, index) => (
					<div key={index} width="48px" height="48px" className="mb-2 cursor-pointer">
						<img className="d-flex object-cover round " src={group} width="48px" height="48px" alt="" />
					</div>
				))}
			</div>
			{/* Plus */}
			<div className="d-flex flex-col w-full align-c">
				<div width="48px" height="48px" className="mb-2 cursor-pointer groups-svg-border">
					<svg className="d-flex object-cover round plus-svg" fill="#249c57" width="48px" height="48px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
						<path d="M486 691h52V538h153v-52H538V333h-52v153H333v52h153z" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Groups;
