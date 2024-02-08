import React, { useContext, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { createChatGroup } from "../../helper/helper";
import { toast } from "react-toastify";
import userContext from "../../context/userContext";

function CreateGroups({ onClose }) {
	const userData = JSON.parse(localStorage.getItem("userdata"));
	const [groupName, setGroupName] = useState("");
	const { fetchGroupsData } = useContext(userContext);

	const handleCreateGroup = async () => {
		const { status } = await createChatGroup(userData, groupName);
		if (status === 200) {
			toast.success("Group Created Successfully..!");
			fetchGroupsData();
		} else {
			toast.error("Try Again..!");
		}
		onClose();
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
												<button type="button" className="add-btn" width="48px" height="48px" onClick={handleCreateGroup}>
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
