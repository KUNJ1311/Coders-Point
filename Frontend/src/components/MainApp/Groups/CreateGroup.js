import React, { useState } from "react";
import axios from "axios";
import { IoAddCircle } from "react-icons/io5";

function CreateGroups({ onClose }) {
	const userData = JSON.parse(localStorage.getItem("userdata"));
	const [groupName, setGroupName] = useState("");

	const lightColors = ["#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FF7043", "#D32F2F", "#4CAF50", "#1976D2", "#512DA8", "#0288D1", "#00796B", "#43A047", "#FF8A65", "#C2185B", "#7B1FA2", "#303F9F", "#1565C0", "#004D40", "#FFC400", "#FF9100", "#FF3D00", "#FF6E40", "#DD2C00", "#C51162", "#8E24AA", "#5E35B1", "#3949AB", "#1E88E5", "#039BE5", "#00ACC1", "#00897B", "#43A047", "#FFB74D", "#D81B60", "#9E9D24", "#8D6E63", "#F4511E", "#795548", "#FFAB00"];

	const getRandomLightColor = () => {
		const randomIndex = Math.floor(Math.random() * lightColors.length);
		return lightColors[randomIndex];
	};

	const createGroup = () => {
		const config = {
			headers: {
				Authorization: `Bearer ${userData.token}`,
			},
		};

		axios.post(
			"http://localhost:8080/chat/createGroup",
			{
				name: groupName,
				img: null, // Replace with the image if available
				color: getRandomLightColor(),
				users: ["649126aee67217ae620c4269", "6517d9a37aa4a9847038b65e"],
			},
			config
		);
	};

	return (
		<>
			<div>
				<section className="profile-window" onClick={onClose}>
					<div className="window2">
						<div className="window3" onClick={(e) => e.stopPropagation()}>
							<div className="window4" style={{ borderRadius: ".5rem" }}>
								<div className="window5">
									<div className="right-window">
										<div className="details">
											<hr className="line" />
											<div className="details2">
												<div className="contact">
													<h6>group name</h6>
												</div>
											</div>
										</div>
										<div className={"createGroups-container"}>
											<input
												placeholder="Enter Group Name"
												className={"search-box"}
												onChange={(e) => {
													setGroupName(e?.target?.value);
												}}
											/>
											<div style={{ display: "flex", alignItems: "flex-start", flex: "0 0 auto" }}>
												<button
													type="button"
													className="add-btn"
													width="48px"
													height="48px"
													onClick={() => {
														createGroup();
														onClose();
													}}
												>
													<IoAddCircle /> <span style={{ color: "white" }}>Create Group</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default CreateGroups;
