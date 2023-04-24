import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import "./Home.css";
import coder from "./g8.svg";

const Home = () => {
	let navigate = useNavigate();
	const handleClick = () => {
		navigate("/mainapp");
	};
	const [state] = useState({
		title: "Welcome To",
		title_two: "Coders Point",
	});

	return (
		<>
			<div style={{ backgroundColor: "rgb(32 35 37)", height: "100vh", width: "100vw" }}>
				<Navbar />
				<button onClick={handleClick}>Login here</button>
				<div className="home">
					<div className="home-intro">
						<div>
							<h2>
								<div className="title">{state.title}</div>
								<div className="title_two">{state.title_two}</div>
								<div className="title_three">{state.title_three}</div>
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
