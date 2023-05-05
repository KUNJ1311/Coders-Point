import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiFolder } from "react-icons/hi2";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiChatAlt } from "react-icons/hi";

const Discover = () => {
	const text = ["test", "fun", "General", "Kunj", "rohit2424"];
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
		<div className="discover">
			<nav className="d-flex discover-nav">
				<div className="relative cursor-pointer">
					<header>
						<div>Thik hai!!</div>
					</header>
				</div>
			</nav>
			<div className="scroller-d">
				<ul className="ul-discover">
					<li className="channels">
						<div className="cursor-pointer wrapperCommon">
							<div className="channels-content" onClick={handleHideChannelsText}>
								<svg style={{ transform: `rotate(${hiddenText ? "-90deg" : "0"})` }} className="arrow-svg" width="24" height="24" viewBox="0 0 24 24">
									<path fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
								</svg>
								<h3 className="channels-name">
									<div>text Channels</div>
								</h3>
							</div>
							<div className="channels-add tooltip">
								<button className="add-button" type="button">
									<svg className="add-svg" width="18px" height="18px" viewBox="-1 -1 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M13 6C13 5.44771 12.5523 5 12 5C11.4477 5 11 5.44771 11 6V11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6Z" />
									</svg>
								</button>
								<span className="tooltiptext">Create Channel</span>
							</div>
						</div>
					</li>
					{text.map((text, textindex) => (
						<li key={textindex} style={{ position: "relative" }} className={hiddenText ? "hidden" : ""}>
							<div className="chat-channels">
								<div className="chat-channels-2">
									<Link to="/channels/testing/" className="link-channels">
										<div className="link-channels-2" role="img">
											<HiChatAlt className="react-svg" fill="#96969a" />
										</div>
										<div className="channels-list">{text}</div>
									</Link>
								</div>
							</div>
						</li>
					))}
				</ul>
				<ul className="ul-discover">
					<li className="channels">
						<div className="cursor-pointer wrapperCommon">
							<div className="channels-content" onClick={handleHideChannelsVC}>
								<svg style={{ transform: `rotate(${hiddenVC ? "-90deg" : "0"})` }} className="arrow-svg" width="24" height="24" viewBox="0 0 24 24">
									<path fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
								</svg>
								<h3 className="channels-name">
									<div>Voice Channels</div>
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
					{vc.map((vc, vcindex) => (
						<li key={vcindex} style={{ position: "relative" }} className={hiddenVC ? "hidden" : ""}>
							<div className="chat-channels">
								<div className="chat-channels-2">
									<Link to="/channels/testing/" className="link-channels">
										<div className="link-channels-2" role="img">
											<HiSpeakerWave className="react-svg" fill="#96969a" />
										</div>
										<div className="channels-list">{vc}</div>
									</Link>
								</div>
							</div>
						</li>
					))}
				</ul>
				<ul className="ul-discover">
					<li className="channels">
						<div className="cursor-pointer wrapperCommon">
							<div className="channels-content" onClick={handleHideChannelsProject}>
								<svg style={{ transform: `rotate(${hiddenProject ? "-90deg" : "0"})` }} className="arrow-svg" width="24" height="24" viewBox="0 0 24 24">
									<path fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
								</svg>
								<h3 className="channels-name">
									<div>Project Files</div>
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
					{project.map((project, projectindex) => (
						<li key={projectindex} style={{ position: "relative" }} className={hiddenProject ? "hidden" : ""}>
							<div className="chat-channels">
								<div className="chat-channels-2">
									<Link to="/channels/testing/" className="link-channels">
										<div className="link-channels-2" role="img">
											<HiFolder className="react-svg" fill="#96969a" />
										</div>
										<div className="channels-list">{project}</div>
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
