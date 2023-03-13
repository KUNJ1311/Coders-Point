import React, { useState } from "react";
import img from "./img/icon.png";
import img1 from "./img/test.jpg";
import img2 from "./img/test.png";
import img3 from "./img/facebook.png";
import img4 from "./img/telegram.png";
import img5 from "./img/twitter.png";
import img6 from "./img/instal.webp";
const Groups = () => {
	const groups = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6];
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [clickedIndex, setClickedIndex] = useState(null);
	const handleClick = (index) => {
		setClickedIndex(index);
		setHoveredIndex(index);
		setClickedlogo(false);
	};
	const handleMouseEnter = (index) => {
		setHoveredIndex(index);
	};

	const handleMouseLeave = () => {
		setHoveredIndex(null);
	};
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnterlogo = () => {
		setIsHovered(true);
	};
	const handleMouseLeavelogo = () => {
		setIsHovered(false);
	};
	const [clickedlogo, setClickedlogo] = useState(false);
	const handleClicklogo = () => {
		setClickedlogo(true);
		setClickedIndex(null);
	};
	const style = {
		height: clickedlogo ? "40px" : isHovered ? "20px" : "8px",
	};
	const mystyle = {
		borderRadius: clickedlogo ? "30%" : isHovered ? "30%" : "50%",
		backgroundColor: clickedlogo ? "#5865f2" : isHovered ? "#5865f2" : "#313338",
	};
	return (
		<div classNameName="groups">
			<div style={{ paddingTop: "12px" }}>
				{/* Home */}
				<div classNameName="d-flex align-c justify-c mb-2" width="48px" height="48px">
					<div height="48px">
						<div classNameName="side-line">
							<span style={style} classNameName="side-line-effect"></span>
						</div>
					</div>
					<div classNameName="d-flex align-c justify-c cursor-pointer groups-border home-logo" style={mystyle} onMouseEnter={handleMouseEnterlogo} onMouseLeave={handleMouseLeavelogo} onClick={handleClicklogo}>
						<div classNameName="align-c justify-c">
							<img classNameName="d-block pr-1 logo-home" src={img} width="20px" height="27px" alt="" />
						</div>
					</div>
				</div>
				{/* line */}
				<div classNameName="d-flex justify-c sm-line ">
					<div classNameName="sm-line-v"></div>
				</div>
				{/* Servers */}
				<div classNameName="d-flex flex-col w-full align-c ">
					{groups.map((group, index) => (
						<div key={index} width="48px" height="48px" classNameName=" cursor-pointer servers" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} onClick={() => handleClick(index)}>
							<div classNameName="d-flex align-c justify-c mb-2 " width="48px" height="48px">
								<div height="48px">
									<div classNameName="side-line">
										<span
											style={{
												height: clickedIndex === index ? "40px" : hoveredIndex === index ? "20px" : "8px",
											}}
											classNameName="side-line-effect"
										></span>
									</div>
								</div>
								<img classNameName=" d-flex object-cover round " style={{ borderRadius: clickedIndex === index ? "30%" : hoveredIndex === index ? "30%" : "50%" }} src={group} width="48px" height="48px" alt="" />
							</div>
						</div>
					))}
				</div>
				{/* Plus */}
				<div classNameName="d-flex flex-col w-full align-c">
					<div width="48px" height="48px" classNameName="mb-2 cursor-pointer groups-svg-border">
						<svg classNameName="d-flex object-cover round plus-svg" fill="#249c57" width="48px" height="48px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
							<path d="M486 691h52V538h153v-52H538V333h-52v153H333v52h153z" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Groups;
