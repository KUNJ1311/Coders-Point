import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import "./Home.css";
import coder from "./g8.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const Navigate = useNavigate();

	const [state] = useState({
		title: "Welcome To",
		title_two: "Coders Point",
	});

	//* Check Token to redirect user to main app
	useEffect(() => {
		async function checkToken() {
			const token = localStorage.getItem("coderToken");
			if (token) {
				Navigate("/mainapp");
			}
		}
		checkToken();
	});

	return (
		<>
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
									strings: ["Code", "Chat", "Contribute"],
								}}
							/>
						</div>
					</div>
					<div className="coders-image">
						<img src={coder} width="400px" height="400px" alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
