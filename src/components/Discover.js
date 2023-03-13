import React, { useState } from "react";
import { Link } from "react-router-dom";

const Discover = () => {
	const text = ["test", "fun", "run"];
	const vc = ["vc", "fun", "testing"];
	const project = ["iu", "coders point"];
	const [hiddenText, setHiddenText] = useState(false);
	const [hiddenVC, setHiddenVC] = useState(false);
	const [hiddenProject, setHiddenProject] = useState(false);
	const handleHideChannelsText = () => {
		setHiddenText(!hiddenText);
	};
	const handleHideChannelsVC = () => {
		setHiddenVC(!hiddenVC);
	};
	const handleHideChannelsProject = () => {
		setHiddenProject(!hiddenProject);
	};
	return (
		<div classNameName="discover">
			<nav classNameName="d-flex discover-nav">
				<div classNameName="relative cursor-pointer">
					<header>
						<div classNameName="d-flex align-c">
							<div>Valorant</div>
						</div>
					</header>
				</div>
			</nav>
			<div classNameName="scroller-d">
				<ul classNameName="ul-discover">
					<li classNameName="channels">
						<div classNameName="cursor-pointer wrapperCommon">
							<div classNameName="channels-content" onClick={handleHideChannelsText}>
								<svg style={{ transform: `rotate(${hiddenText ? "-90deg" : "0"})` }} classNameName="arrow-svg" width="24" height="24" viewBox="0 0 24 24">
									<path fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
								</svg>
								<h3 classNameName="channels-name">
									<div>text Channels</div>
								</h3>
							</div>
							<div classNameName="channels-add tooltip">
								<button classNameName="add-button " type="button">
									<svg classNameName="add-svg" width="18px" height="18px" viewBox="-1 -1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M13 6C13 5.44771 12.5523 5 12 5C11.4477 5 11 5.44771 11 6V11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6Z" />
									</svg>
								</button>
								<span classNameName="tooltiptext">Create Channel</span>
							</div>
						</div>
					</li>
					{text.map((text, textindex) => (
						<li key={textindex} style={{ position: "relative" }} classNameName={hiddenText ? "hidden" : ""}>
							<div classNameName="chat-channels">
								<div classNameName="chat-channels-2">
									<Link to="/channels/testing/" classNameName="link-channels">
										<div classNameName="link-channels-2" role="img">
											<svg width="18px" height="18px" viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8 10H8.01" stroke="#96969a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M12 10H12.01" stroke="#96969a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M16 10H16.01" stroke="#96969a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M21 13V7C21 5.11438 21 4.17157 20.4142 3.58579C19.8284 3 18.8856 3 17 3H7C5.11438 3 4.17157 3 3.58579 3.58579C3 4.17157 3 5.11438 3 7V13C3 14.8856 3 15.8284 3.58579 16.4142C4.17157 17 5.11438 17 7 17H7.5C7.77614 17 8 17.2239 8 17.5V20V20.1499C8 20.5037 8.40137 20.7081 8.6875 20.5L13.0956 17.2941C13.3584 17.103 13.675 17 14 17H17C18.8856 17 19.8284 17 20.4142 16.4142C21 15.8284 21 14.8856 21 13Z" stroke="#96969a" strokeWidth="2" strokeLinejoin="round" />
											</svg>
										</div>
										<div classNameName="channels-list">{text}</div>
									</Link>
								</div>
							</div>
						</li>
					))}
				</ul>
				<ul classNameName="ul-discover">
					<li classNameName="channels">
						<div classNameName="cursor-pointer wrapperCommon">
							<div classNameName="channels-content" onClick={handleHideChannelsVC}>
								<svg style={{ transform: `rotate(${hiddenVC ? "-90deg" : "0"})` }} classNameName="arrow-svg" width="24" height="24" viewBox="0 0 24 24">
									<path fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
								</svg>
								<h3 classNameName="channels-name">
									<div>Voice Channels</div>
								</h3>
							</div>
							<div classNameName="channels-add tooltip">
								<button classNameName="add-button " type="button">
									<svg classNameName="add-svg" width="18px" height="18px" viewBox="-1 -1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M13 6C13 5.44771 12.5523 5 12 5C11.4477 5 11 5.44771 11 6V11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6Z" />
									</svg>
								</button>
								<span classNameName="tooltiptext">Create Channel</span>
							</div>
						</div>
					</li>
					{vc.map((vc, vcindex) => (
						<li key={vcindex} style={{ position: "relative" }} classNameName={hiddenVC ? "hidden" : ""}>
							<div classNameName="chat-channels">
								<div classNameName="chat-channels-2">
									<Link to="/channels/testing/" classNameName="link-channels">
										<div classNameName="link-channels-2" role="img">
											<svg classNameName="add-svg" width="18px" height="18px" viewBox="-1 3 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M12.1657 2.14424C12.8728 2.50021 13 3.27314 13 3.7446V20.2561C13 20.7286 12.8717 21.4998 12.1656 21.8554C11.416 22.2331 10.7175 21.8081 10.3623 21.4891L4.95001 16.6248H3.00001C1.89544 16.6248 1.00001 15.7293 1.00001 14.6248L1 9.43717C1 8.3326 1.89543 7.43717 3 7.43717H4.94661L10.3623 2.51158C10.7163 2.19354 11.4151 1.76635 12.1657 2.14424ZM11 4.63507L6.00618 9.17696C5.82209 9.34439 5.58219 9.43717 5.33334 9.43717H3L3.00001 14.6248H5.33334C5.58015 14.6248 5.81823 14.716 6.00179 14.881L11 19.3731V4.63507Z" />
												<path d="M16.0368 4.73124C16.1852 4.19927 16.7368 3.88837 17.2688 4.03681C20.6116 4.9696 23 8.22106 23 12C23 15.779 20.6116 19.0304 17.2688 19.9632C16.7368 20.1117 16.1852 19.8007 16.0368 19.2688C15.8884 18.7368 16.1993 18.1852 16.7312 18.0368C19.1391 17.3649 21 14.9567 21 12C21 9.04332 19.1391 6.63512 16.7312 5.96321C16.1993 5.81477 15.8884 5.2632 16.0368 4.73124Z" />
												<path d="M16.2865 8.04192C15.7573 7.88372 15.2001 8.18443 15.0419 8.71357C14.8837 9.24271 15.1844 9.79992 15.7136 9.95812C16.3702 10.1544 17 10.9209 17 12C17 13.0791 16.3702 13.8456 15.7136 14.0419C15.1844 14.2001 14.8837 14.7573 15.0419 15.2865C15.2001 15.8156 15.7573 16.1163 16.2865 15.9581C17.9301 15.4667 19 13.8076 19 12C19 10.1924 17.9301 8.53333 16.2865 8.04192Z" />
											</svg>
										</div>
										<div classNameName="channels-list">{vc}</div>
									</Link>
								</div>
							</div>
						</li>
					))}
				</ul>
				<ul classNameName="ul-discover">
					<li classNameName="channels">
						<div classNameName="cursor-pointer wrapperCommon">
							<div classNameName="channels-content" onClick={handleHideChannelsProject}>
								<svg style={{ transform: `rotate(${hiddenProject ? "-90deg" : "0"})` }} classNameName="arrow-svg" width="24" height="24" viewBox="0 0 24 24">
									<path fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
								</svg>
								<h3 classNameName="channels-name">
									<div>Project Files</div>
								</h3>
							</div>
							<div classNameName="channels-add tooltip">
								<button classNameName="add-button " type="button">
									<svg classNameName="add-svg" width="18px" height="18px" viewBox="-1 -1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M13 6C13 5.44771 12.5523 5 12 5C11.4477 5 11 5.44771 11 6V11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6Z" />
									</svg>
								</button>
								<span classNameName="tooltiptext">Create Channel</span>
							</div>
						</div>
					</li>
					{project.map((project, projectindex) => (
						<li key={projectindex} style={{ position: "relative" }} classNameName={hiddenProject ? "hidden" : ""}>
							<div classNameName="chat-channels">
								<div classNameName="chat-channels-2">
									<Link to="/channels/testing/" classNameName="link-channels">
										<div classNameName="link-channels-2" role="img">
											<svg width="20px" height="20px" viewBox="-1 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke="#96969a" strokeWidth="2" strokeLinejoin="round" />
												<path d="M21 11H17.688H12.312C7.93757 11 7 11.9376 7 16.312V19.5" stroke="#96969a" strokeWidth="2" strokeLinecap="round" />
											</svg>
										</div>
										<div classNameName="channels-list">{project}</div>
									</Link>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Discover;
