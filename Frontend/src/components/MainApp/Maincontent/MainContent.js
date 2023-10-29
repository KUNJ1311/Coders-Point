import React, { useEffect, useState } from "react";
import "./maincontent.css";
import { HiChatAlt } from "react-icons/hi";
import { IoAddCircle } from "react-icons/io5";
// import { userData } from "../../helper/helper";

const MainContent = () => {
	const [value, setValue] = useState("");
	// const [adduserData, setAddUserData] = useState(null);

	//* change text area height dynamically
	function handleChange(event) {
		setValue(event.target.value);
		event.target.style.height = "auto";
		event.target.style.height = `${event.target.scrollHeight}px`;
	}

	// //* Getting user data
	// useEffect(() => {
	// 	const GetData = async () => {
	// 		try {
	// 			const { data, status } = await userData();
	// 			if (status === 201) {
	// 				setAddUserData(data);
	// 			}
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	GetData();
	// }, []);

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
							<div className="invi-block"></div>
						</div>
						<form className="chat-form">
							<div className="chat-input">
								<div className="auto-height">
									<div style={{ display: "flex", alignItems: "flex-start", flex: "0 0 auto" }}>
										<button className="add-btn">
											<IoAddCircle />
										</button>
									</div>
									<div style={{ display: "flex", alignItems: "center", flex: "1 1 auto", minHeight: "44px" }}>
										<textarea value={value} onChange={handleChange} rows={1} type="text" placeholder="Message #General" />
									</div>
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
