import React from "react";
import { Link } from "react-router-dom";

const Discover = () => {
	return (
		<div className="discover">
			<nav className="d-flex discover-nav">
				<div className="relative cursor-pointer">
					<header>
						<div className="d-flex align-c">
							<div>Valorant</div>
						</div>
					</header>
				</div>
			</nav>
			<div className="scroller-d">
				<ul className="ul-discover">
					<li className="channels">
						<div className="cursor-pointer wrapperCommon">
							<div className="channels-content">
								<svg className="arrow-svg" width="24" height="24" viewBox="0 0 24 24">
									<path fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
								</svg>
								<h3 className="channels-name">
									<div>Coders Chatting</div>
								</h3>
							</div>
							<div className="channels-add tooltip">
								<button className="add-button " type="button">
									<svg className="add-svg" width="18px" height="18px" viewBox="-1 -1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M13 6C13 5.44771 12.5523 5 12 5C11.4477 5 11 5.44771 11 6V11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6Z" />
									</svg>
								</button>
								<span className="tooltiptext">Create Channel</span>
							</div>
						</div>
					</li>
					<li style={{ position: "relative" }}>
						<div className="chat-channels">
							<div className="chat-channels-2">
								<Link to="/channels/testing/" className="link-channels">
									<div className="link-channels-2" role="img">
										<svg width="18px" height="18px" viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8 10H8.01" stroke="#96969a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M12 10H12.01" stroke="#96969a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M16 10H16.01" stroke="#96969a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M21 13V7C21 5.11438 21 4.17157 20.4142 3.58579C19.8284 3 18.8856 3 17 3H7C5.11438 3 4.17157 3 3.58579 3.58579C3 4.17157 3 5.11438 3 7V13C3 14.8856 3 15.8284 3.58579 16.4142C4.17157 17 5.11438 17 7 17H7.5C7.77614 17 8 17.2239 8 17.5V20V20.1499C8 20.5037 8.40137 20.7081 8.6875 20.5L13.0956 17.2941C13.3584 17.103 13.675 17 14 17H17C18.8856 17 19.8284 17 20.4142 16.4142C21 15.8284 21 14.8856 21 13Z" stroke="#96969a" strokeWidth="2" strokeLinejoin="round" />
										</svg>
									</div>
									<div className="channels-list">Fun</div>
								</Link>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Discover;
