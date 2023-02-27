import Button from "react-bootstrap/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	let navigate = useNavigate();
	const handleClick = () => {
		navigate("/mainapp");
	};
	return (
		<div>
			<h1 className="mx-3 my-5">કામ ચાલુ છે.</h1>
			<Button variant="danger" onClick={handleClick}>
				Login
			</Button>
		</div>
	);
};

export default Home;
