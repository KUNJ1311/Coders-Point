import React, { useState } from "react";
import img from "../../Image/icon.png";
import img1 from "../../Image/test.jpg";
import img2 from "../../Image/test.png";
import img3 from "../../Image/facebook.png";
import img4 from "../../Image/telegram.png";
import img5 from "../../Image/twitter.png";
import img6 from "../../Image/instal.webp";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Groups = () => {
	const groups = [
		{ name: "Valorant", img: img1 },
		{ name: "React JS", img: img2 },
		{ name: "Facebook", img: img3 },
		{ name: "Telegram", img: img4 },
		{ name: "Twitter", img: img5 },
		{ name: "Instagram", img: img6 },
		{ name: "Valorant", img: img1 },
		{ name: "React JS", img: img2 },
		{ name: "Facebook", img: img3 },
		{ name: "Telegram", img: img4 },
		{ name: "Twitter", img: img5 },
		{ name: "Instagram", img: img6 },
	];

	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [clickedIndex, setClickedIndex] = useState(null);
	const [clickedlogo, setClickedlogo] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

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

	const handleMouseEnterlogo = () => {
		setIsHovered(true);
	};

	const handleMouseLeavelogo = () => {
		setIsHovered(false);
	};

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
		<div className="groups">
			<div style={{ paddingTop: "12px" }}>
				{/* Home */}
				<div className="d-flex align-c justify-c mb-2" width="48px" height="48px">
					<div height="48px">
						<div className="side-line">
							<span style={style} className="side-line-effect"></span>
						</div>
					</div>
					<div id="home-tooltip" data-tooltip-offset={20} className="d-flex align-c justify-c cursor-pointer groups-border home-logo" style={mystyle} onMouseEnter={handleMouseEnterlogo} onMouseLeave={handleMouseLeavelogo} onClick={handleClicklogo}>
						<div className="align-c justify-c">
							<img className="d-block logo-home" src={img} width="30px" height="30px" alt="" />
						</div>
					</div>
					<Tooltip anchorSelect="#home-tooltip" place="right" content="Home" id="tooltip" style={{ fontSize: "15px" }} />
				</div>
				{/* line */}
				<div className="d-flex justify-c sm-line ">
					<div className="sm-line-v"></div>
				</div>
				{/* Servers */}
				<div className="d-flex flex-col w-full align-c ">
					{groups.map((group, index) => (
						<div key={index} width="48px" height="48px" className="servers">
							<div id="groups-tooltip" data-tooltip-content={group.name} data-tooltip-offset={20} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} onClick={() => handleClick(index)} className="cursor-pointer d-flex align-c justify-c mb-2 " width="48px" height="48px">
								<Tooltip id="tooltip" anchorSelect="#groups-tooltip" place="right" style={{ fontSize: "15px" }} render={({ content }) => <span>{content}</span>} />
								<div height="48px">
									<div className="side-line">
										<span
											style={{
												height: clickedIndex === index ? "40px" : hoveredIndex === index ? "20px" : "8px",
											}}
											className="side-line-effect"
										></span>
									</div>
								</div>
								<img className=" d-flex object-cover round " style={{ borderRadius: clickedIndex === index ? "30%" : hoveredIndex === index ? "30%" : "50%" }} src={group.img} width="48px" height="48px" alt="" />
							</div>
						</div>
					))}
				</div>
				{/* Plus */}
				<div className="d-flex flex-col w-full align-c">
					<div id="add-tooltip" data-tooltip-offset={20} width="48px" height="48px" className="mb-2 cursor-pointer groups-svg-border">
						<svg className="d-flex object-cover round plus-svg" fill="#249c57" width="48px" height="48px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
							<path d="M486 691h52V538h153v-52H538V333h-52v153H333v52h153z" />
						</svg>
						<Tooltip anchorSelect="#add-tooltip" place="right" content="Add Group" id="tooltip" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Groups;
