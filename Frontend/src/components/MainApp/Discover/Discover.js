import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiFolder } from "react-icons/hi2";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiChatAlt, HiPlus } from "react-icons/hi";
import { useSelector } from "react-redux";
import "./discover.css";

const Discover = () => {
	const mode = useSelector((state) => state.themeKey);

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
		<>
			<div className={"discover " + (mode ? "" : "discover-col")}>
				<nav className="d-flex discover-nav">
					<div className="relative cursor-pointer">
						<header className={mode ? "" : "discover-col nav_shadow"}>
							<div className={mode ? "" : "discover-col"}>Group Name</div>
						</header>
					</div>
				</nav>
				<div className={"scroller-d " + (mode ? "" : "scroll-d")}>
					<ul className={"ul-discover " + (mode ? "" : "discover-col")}>
						<li className="channels">
							<div className="cursor-pointer wrapperCommon">
								<div className="channels-content" onClick={handleHideChannelsText}>
									<svg style={{ transform: `rotate(${hiddenText ? "-90deg" : "0"})` }} className="arrow-svg" width="24" height="24" viewBox="0 0 24 24">
										<path fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
									</svg>
									<h3 className="channels-name">
										<div className={mode ? "" : "darkfont"}>text Channels</div>
									</h3>
								</div>
								<div className="channels-add ">
									<button className="add-button" data-tooltip-id="my-tooltip" data-tooltip-offset={8} data-tooltip-place="top" data-tooltip-content="Create Channel" type="button">
										<HiPlus className="add-svg" width="18px" height="18px" />
									</button>
								</div>
							</div>
						</li>
						{text.map((text, textindex) => (
							<li key={textindex} style={{ position: "relative" }} className={hiddenText ? "hidden" : ""}>
								<div className="chat-channels">
									<div className={"chat-channels-2 " + (mode ? "" : "discover-col")}>
										<Link to="/channels/testing/" className="link-channels">
											<div className="link-channels-2" role="img">
												<HiChatAlt className="type-svg" fill="#96969a" />
											</div>
											<div className={"channels-list " + (mode ? "" : "darkfont")}>{text}</div>
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
										<div className={mode ? "" : "darkfont"}>Voice Channels</div>
									</h3>
								</div>
								<div className="channels-add">
									<button className="add-button" data-tooltip-id="my-tooltip" data-tooltip-offset={8} data-tooltip-place="top" data-tooltip-content="Create Channel" type="button">
										<HiPlus className="add-svg" width="18px" height="18px" />
									</button>
								</div>
							</div>
						</li>
						{vc.map((vc, vcindex) => (
							<li key={vcindex} style={{ position: "relative" }} className={hiddenVC ? "hidden" : ""}>
								<div className="chat-channels">
									<div className={"chat-channels-2 " + (mode ? "" : "discover-col")}>
										<Link to="/channels/testing/" className="link-channels">
											<div className="link-channels-2" role="img">
												<HiSpeakerWave className="type-svg" fill="#96969a" />
											</div>
											<div className={"channels-list " + (mode ? "" : "channel-list-dark")}>{vc}</div>
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
										<div className={mode ? "" : "darkfont"}>Project Files</div>
									</h3>
								</div>
								<div className="channels-add ">
									<button className="add-button" data-tooltip-id="my-tooltip" data-tooltip-offset={8} data-tooltip-place="top" data-tooltip-content="Create Channel" type="button">
										<HiPlus className="add-svg" width="18px" height="18px" />
									</button>
								</div>
							</div>
						</li>
						{project.map((project, projectindex) => (
							<li key={projectindex} style={{ position: "relative" }} className={hiddenProject ? "hidden" : ""}>
								<div className="chat-channels">
									<div className={"chat-channels-2 " + (mode ? "" : "discover-col")}>
										<Link to="/channels/testing/" className="link-channels">
											<div className="link-channels-2" role="img">
												<HiFolder className="type-svg" fill="#96969a" />
											</div>
											<div className={"channels-list " + (mode ? "" : "channel-list-dark")}>{project}</div>
										</Link>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Discover;
