import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	let navigate = useNavigate();
	const handleClick = () => {
		navigate("/mainapp");
	};
	return (
		<div>
			<h1>કામ ચાલુ છે.</h1>
			<button type="button" onClick={handleClick}>
				login
			</button>
		</div>
	);
};

export default Home;
