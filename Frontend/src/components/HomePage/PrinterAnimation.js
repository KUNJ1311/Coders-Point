import React, { useState, useEffect } from "react";

function PrinterAnimation() {
	const [clicked, setClicked] = useState(false);

	const handleCheckboxChange = () => {
		setClicked(!clicked);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setClicked(true); // Change this to false if you want it initially unchecked
		}, 2200); // 3000 milliseconds = 3 seconds

		return () => clearTimeout(timer); // Cleanup function to clear the timer if the component unmounts before the timeout
	}, []); // Empty dependency array ensures this effect runs only once after initial render

	return (
		<div id="printer-animation" className={clicked ? "printer-animation clicked" : "printer-animation"}>
			<div className="printer">
				<input id="printer-button" type="checkbox" onChange={handleCheckboxChange} checked={clicked} />
				<label className="printer-button" htmlFor="printer-button"></label>
				<div className="top"></div>
				<div className="middle"></div>
				<div className="trace"></div>
				<div
					className="paper"
					onClick={() => {
						setClicked(!clicked);
					}}
				></div>
			</div>
		</div>
	);
}

export default PrinterAnimation;
