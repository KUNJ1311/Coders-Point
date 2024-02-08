import React, { useContext, useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import "./groups.css";
import ProfileModel from "./ProfileModel";
import { HiPlus } from "react-icons/hi2";
import CreateGroups from "./CreateGroup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import userContext from "../../context/userContext";

const Groups = ({ chat_id }) => {
	const mode = useSelector((state) => state.themeKey);

	const navigate = useNavigate();

	const [showCreateGroup, setShowCreateGroup] = useState(false);
	const { groups, fetchGroupsData } = useContext(userContext);

	//* Close Profile page
	const handleCloseCreateGroup = () => {
		setShowCreateGroup(false);
	};

	//* Close Profile page with ESC Key
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				handleCloseCreateGroup();
			}
		};
		if (showCreateGroup) {
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("keydown", handleKeyDown);
		}
	}, [showCreateGroup]);

	//* Get Started to Profile
	const handleCreateGroupClick = () => {
		setShowCreateGroup(true);
	};

	const [showProfileModel, setShowProfileModel] = useState(false);

	//* Close Profile page
	const handleCloseProfileModel = () => {
		setShowProfileModel(false);
		setClickedlogo(false);
	};

	//* Close Profile page with ESC Key
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				handleCloseProfileModel();
			}
		};
		if (showProfileModel) {
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("keydown", handleKeyDown);
		}
	}, [showProfileModel]);

	//* Get Started to Profile
	const handleProfileClick = () => {
		setShowProfileModel(true);
		setClickedlogo(true);
	};

	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [clickedlogo, setClickedlogo] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleClick = (index, group) => {
		navigate(`/mainapp/chat/${group._id}&${group.chatName}`);
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

	const style = {
		height: clickedlogo ? "40px" : isHovered ? "20px" : "8px",
	};

	const mystyle = {
		borderRadius: clickedlogo ? "30%" : isHovered ? "30%" : "50%",
	};

	useEffect(() => {
		fetchGroupsData();
	}, []);

	return (
		<>
			{showCreateGroup && <CreateGroups onClose={handleCloseCreateGroup} />}
			{showProfileModel && <ProfileModel onClose={handleCloseProfileModel} />}
			<div className={"groups " + (mode ? "" : "groups-dark")}>
				<div style={{ paddingTop: "12px" }}>
					{/* Home */}
					<div className="d-flex align-c justify-c mb-2" width="48px" height="48px">
						<div height="48px">
							<div className="side-line">
								<span style={style} className={mode ? "side-line-effect" : "side-line-dark"}></span>
							</div>
						</div>
						<div data-tooltip-id="my-tooltip-big" data-tooltip-content="Profile" data-tooltip-offset={18} data-tooltip-place="right" className="d-flex align-c justify-c cursor-pointer round" onMouseEnter={handleMouseEnterlogo} onMouseLeave={handleMouseLeavelogo} onClick={handleProfileClick}>
							<img className="d-flex object-cover round-effect" style={mystyle} src="https://cdn.discordapp.com/avatars/715429945295372329/a977e19af9bf390800ab713f57edb7a1.webp" width="48px" height="48px" alt="" />
						</div>
					</div>
					{/* line */}
					<div className="d-flex justify-c sm-line ">
						<div className={"sm-line-v"} style={{ backgroundColor: mode ? "" : "#ccced3" }}></div>
					</div>
					{/* Servers */}
					<div className="d-flex flex-col w-full align-c ">
						{groups &&
							groups.map((group, index) => (
								<div key={index} width="48px" height="48px" className="servers">
									<div data-tooltip-id="my-tooltip-big" data-tooltip-content={group.chatName} data-tooltip-offset={18} data-tooltip-place="right" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} onClick={() => handleClick(index, group)} className="cursor-pointer d-flex align-c justify-c mb-2 " width="48px" height="48px">
										<div height="48px">
											<div className="side-line">
												<span
													style={{
														height: chat_id === group._id ? "40px" : hoveredIndex === index ? "20px" : "8px",
													}}
													className={mode ? "side-line-effect" : "side-line-dark"}
												></span>
											</div>
										</div>
										{group.img ? (
											<img className=" d-flex object-cover round " style={{ borderRadius: chat_id === group._id ? "30%" : hoveredIndex === index ? "30%" : "50%" }} src={group.img} width="48px" height="48px" alt="" />
										) : (
											<div
												className="d-flex object-cover round"
												width="48px"
												height="48px"
												style={{
													borderRadius: chat_id === group._id ? "30%" : hoveredIndex === index ? "30%" : "50%",
													textAlign: "center",
													lineHeight: "48px",
													fontSize: "30px",
													backgroundColor: group.color,
													width: "48px",
													height: "48px",
													justifyContent: "center",
													alignItems: "center",
													fontWeight: "500",
												}}
											>
												{group.chatName.charAt(0).toUpperCase()}
											</div>
										)}
									</div>
								</div>
							))}
					</div>
					{/* Plus */}
					<div className="d-flex flex-col w-full align-c">
						<div data-tooltip-id="my-tooltip-big" data-tooltip-content="Add Group" data-tooltip-offset={18} data-tooltip-place="right" width="48px" height="48px" className="mb-2 cursor-pointer groups-svg-border" style={{ backgroundColor: !mode ? "#ffffff" : "" }} onClick={handleCreateGroupClick}>
							<HiPlus className="add-svg add-group" width="18px" height="18px" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Groups;
