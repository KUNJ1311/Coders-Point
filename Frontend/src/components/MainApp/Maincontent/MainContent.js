import React from "react";
import "./maincontent.css";
import { HiChatAlt } from "react-icons/hi";
import { IoAddCircle } from "react-icons/io5";
const MainContent = () => {
	return (
		<>
			<div className="maincontent">
				<section className="align-c d-flex">
					<div className="relative" style={{ flex: "1 1 auto" }}>
						<div className="maincontent-title">
							<div>
								<HiChatAlt className="big-type-svg" fill="#96969a" />
							</div>
							<span>General</span>
						</div>
					</div>
				</section>
				<main>
					<div style={{ overflow: "auto", display: "flex", flex: "1 1 auto", flexDirection: "column" }}>
						<div className="chat-area">
							<div style={{ color: "white", padding: "70px" }}>
								Hello
								<div className="invi-block"></div>
							</div>
						</div>
						<form className="chat-form">
							<div className="chat-input">
								<div style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}>
									<button className="add-btn">
										<IoAddCircle />
									</button>
								</div>
							</div>
						</form>
					</div>
				</main>
			</div>
		</>
	);
};

export default MainContent;
