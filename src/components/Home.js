import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	let navigate = useNavigate();
	const handleClick = () => {
		navigate("/mainapp");
	};
	const handleClickme = () => {
		navigate("/login");
	};
	return (
		<>
			<div>
				<h1>i am starting now</h1>
				<button onClick={handleClickme}>test</button>
				<button onClick={handleClick}>Login</button>
			</div>
		</>
	);
};

export default Home;
