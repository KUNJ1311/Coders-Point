import React from "react";
import "./Profile.css";
import user1 from "../../Image/facebook.png";
export default function ProfileModal({ onClose }) {
	return (
		<section className="profile-window" onClick={onClose}>
			<div className="window2">
				<div className="window3" onClick={(e) => e.stopPropagation()}>
					<div className="window4" style={{ borderRadius: ".5rem" }}>
						<div className="window5">
							<div className="left-window" style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
								<img src={user1} alt="Avatar" className="img" style={{ width: "80px" }} />
								<h5>Rishi Hirpara</h5>
								<p>Web Designer</p>
							</div>
							<div className="right-window">
								<div className="details">
									<h6>Information</h6>
									<hr className="line" />
									<div className="details2">
										<div className="contact">
											<h6>Username</h6>
											<p className="contactno">holla</p>
										</div>
										<div className="mail">
											<h6>Email</h6>
											<p className="mailid">info@example.com</p>
										</div>
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
