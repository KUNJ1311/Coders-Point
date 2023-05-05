import React, { useState } from "react";
import "./tooltip.css";

function Tooltip() {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div className="tooltip" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
			<span>Hover over me</span>
			{showTooltip && (
				<span data-text="Thanks for hovering! I'm a tooltip" class="tooltip">
					Hover over me!
				</span>
			)}
		</div>
	);
}

export default Tooltip;
