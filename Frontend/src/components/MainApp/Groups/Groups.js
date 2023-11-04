import React, { useEffect, useState } from "react";
import img1 from "../../Image/test.jpg";
import img2 from "../../Image/test.png";
import img3 from "../../Image/facebook.png";
import img4 from "../../Image/telegram.png";
import img5 from "../../Image/twitter.png";
import img6 from "../../Image/instal.webp";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ProfileModal from "./ProfileModal";

const Groups = () => {
	const [showProfileModal, setShowProfileModal] = useState(false);

	//* Close login page
	const handleCloseProfileModal = () => {
		setShowProfileModal(false);
		setClickedlogo(false);
	};

	//* Close login page with ESC Key
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				handleCloseProfileModal();
			}
		};
		if (showProfileModal) {
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("keydown", handleKeyDown);
		}
	}, [showProfileModal]);

	const groups = [
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

	//* Get Started to login
	const handleProfileClick = () => {
		setShowProfileModal(true);
		setClickedlogo(true);
		setClickedIndex(null);
	};

	const style = {
		height: clickedlogo ? "40px" : isHovered ? "20px" : "8px",
	};

	const mystyle = {
		borderRadius: clickedlogo ? "30%" : isHovered ? "30%" : "50%",
	};

	let Navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("coderToken");
		Navigate("/");
	};
	return (
		<>
			{showProfileModal && <ProfileModal onClose={handleCloseProfileModal} />}
			<div className="groups">
				<div style={{ paddingTop: "12px" }}>
					{/* Home */}
					<div className="d-flex align-c justify-c mb-2" width="48px" height="48px">
						<div height="48px">
							<div className="side-line">
								<span style={style} className="side-line-effect"></span>
							</div>
						</div>
						<div id="home-tooltip" data-tooltip-offset={20} className="d-flex align-c justify-c cursor-pointer round" onMouseEnter={handleMouseEnterlogo} onMouseLeave={handleMouseLeavelogo} onClick={handleProfileClick}>
							<img className="d-flex object-cover round-effect" style={mystyle} src="https://cdn.discordapp.com/attachments/1019824561396649994/1170282970616180766/WhatsApp_Image_2023-11-04_at_09.39.26_844c77ef.jpg?ex=655879f3&is=654604f3&hm=6f9c592d062644229a40dbc321b5b92de120a28d27be3098b4c2200e51a9d546&" width="48px" height="48px" alt="" />
						</div>
						<Tooltip anchorSelect="#home-tooltip" place="right" content="Profile" id="tooltip" style={{ fontSize: "15px" }} />
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
					{/* Logout */}
					<div className="d-flex flex-col w-full align-c">
						<div id="logoutsvg-btn" data-tooltip-offset={20} width="48px" height="48px" className="mb-2 cursor-pointer groups-svg-border" onClick={handleLogout}>
							<IoExitOutline className="logout_btn" />
							<Tooltip anchorSelect="#logoutsvg-btn" place="right" content="Logout" id="tooltip" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Groups;
