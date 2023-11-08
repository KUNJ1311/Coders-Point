import React, { useState } from "react";
import axios from "axios";
import { IoAddCircle } from "react-icons/io5";

function CreateGroups({ onClose }) {
	const userData = JSON.parse(localStorage.getItem("userdata"));
	const [groupName, setGroupName] = useState("");

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
