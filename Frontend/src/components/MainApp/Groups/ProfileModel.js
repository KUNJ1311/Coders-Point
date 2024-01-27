import React, { useEffect, useState } from "react";
import "./Profile.css";
import { TbPhotoEdit } from "react-icons/tb";
import { userData } from "../../helper/helper";
import { useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function ProfileModel({ onClose }) {
	const mode = useSelector((state) => state.themeKey);

	const [adduserData, setAddUserData] = useState(null);
	//* Getting user data
	useEffect(() => {
		const GetData = async () => {
			try {
				const { data, status } = await userData();
				if (status === 201) {
					setAddUserData(data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		GetData();
	}, []);

	let Navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("userdata");
		Navigate("/");
	};
	return (
		<section className="profile-window" onClick={onClose}>
			<div className="window2">
				<div className="window3" onClick={(e) => e.stopPropagation()}>
					<div className="window4" style={{ borderRadius: ".5rem" }}>
						<div className="window5">
							<div className="left-window">
								<img src="	https://cdn.discordapp.com/avatars/715429945295372329/a977e19af9bf390800ab713f57edb7a1.webp" alt="Avatar" className="profile-img" style={{ width: "230px", height: "230px", borderRadius: "50%" }} />
								<div className="edit-icon-area">
									<TbPhotoEdit className="edit-icon" />
								</div>
							</div>
							<div className="right-window">
								<div className="details">
									<h6>Information</h6>
									<hr className="line" />
									<div className="details2">
										<div className="contact">
											<h6>Username</h6>
											<p className="contactno">{adduserData?.username}</p>
										</div>
										<div className="mail">
											<h6>Email</h6>
											<p className="mailid">{adduserData?.email}</p>
										</div>
									</div>
								</div>
								<div className="profile-btns">
									<div id="logoutsvg-btn" data-tooltip-offset={20} width="48px" height="48px" className="mb-2 cursor-pointer groups-svg-border" style={{ backgroundColor: !mode ? "#ffffff" : "" }} onClick={handleLogout}>
										<IoExitOutline className="logout_btn" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
