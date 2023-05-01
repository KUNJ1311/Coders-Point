import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import "./Home.css";
import coder from "./g8.svg";
import { validateToken } from "../helper/helper";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const [state] = useState({
		title: "Welcome To",
		title_two: "Coders Point",
	});

	const Navigate = useNavigate();
	useEffect(() => {
		async function checkToken() {
			const token = localStorage.getItem("coderToken");
			const response = await validateToken(token);
			if (response.status === 200) {
				Navigate("/mainapp");
			} else {
				localStorage.removeItem("coderToken");
			}
		}
		checkToken();
	});

	return (
		<>
			<div style={{ backgroundColor: "rgb(32 35 37)", height: "100vh", width: "100vw" }}>
				<Navbar />
				<div className="home">
					<div className="home-intro">
						<div>
							<h2>
								<div className="title">{state.title}</div>
								<div className="title_two">{state.title_two}</div>
							</h2>
							<div className="text">
								<Typewriter
									options={{
										autoStart: true,
										loop: true,
										delay: 50,
										strings: ["Code", "Chat", "Contibute"],
									}}
								/>
							</div>
						</div>
						<div className="coders-image">
							<img src={coder} width="400px" height="400px" alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
