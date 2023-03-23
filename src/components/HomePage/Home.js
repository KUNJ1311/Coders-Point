import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
	let navigate = useNavigate();
	const handleClick = () => {
		navigate("/mainapp");
	};

	return (
		<>
			<div style={{ backgroundColor: "rgb(32 35 37)", height: "100vh", width: "100vw" }}>
				<Navbar />
				<button onClick={handleClick}>Login</button>
			</div>
		</>
	);
};

export default Home;
