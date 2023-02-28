import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	let navigate = useNavigate();
	const handleClick = () => {
		navigate("/mainapp");
	};
	return (
		<div>
			<h1 className="">કામ ચાલુ છે.</h1>
			<button onClick={handleClick}>Signup</button>
		</div>
	);
};

export default Home;
