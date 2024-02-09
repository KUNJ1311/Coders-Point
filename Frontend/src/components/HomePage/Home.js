import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import "./Home.css";
import coder from "./g8.svg";
import { useNavigate } from "react-router-dom";
import home from "./img/banner-bg.png";
import PrinterAnimation from "./PrinterAnimation";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Home = () => {
	const Navigate = useNavigate();

	const [state] = useState({
		title: "Welcome To",
		title_two: "Coders Point",
	});

	//* Check Token to redirect user to main app
	useEffect(() => {
		async function checkToken() {
			const data = localStorage.getItem("userdata");
			if (data) {
				Navigate("/mainapp");
			}
		}
		checkToken();
	});

	return (
		<>
			<Navbar />
			<div className="home">
				<img src={home} alt="dhruvin" className="home-bg" />
				<div className="home-intro">
					<div>
						<h2>
							<div className="title">{state.title}</div>
							<div className="title_two">{state.title_two}</div>
						</h2>
						<div className="type-text">
							<Typewriter
								options={{
									autoStart: true,
									loop: true,
									delay: 50,
									strings: ["Code", "Chat", "Contribute"],
								}}
							/>
						</div>
					</div>
					<div className="coders-image">{/* <img src={coder} width="400px" height="400px" alt="" /> */ <PrinterAnimation />}</div>
				</div>
				<div className="lorem">
					Want to code together,Ajaoo
					<br />
					Want to chat while Coding, Ajaoo
					<br />
					Want to Share Screen while coding ,Ajaoo
					<br />
				</div>

				<footer className="footer2">
					<div className="waves">
						<div className="wave" id="wave1"></div>
						<div className="wave" id="wave2"></div>
						<div className="wave" id="wave3"></div>
						<div className="wave" id="wave4"></div>
					</div>
					<ul className="social-icon">
						<li className="social-icon_item">
							<a className="social-icon_link" href="https://www.facebook.com/">
								<FaFacebook className="social-size" />
							</a>
						</li>
						<li className="social-icon_item">
							<a className="social-icon_link" href="https://twitter.com/">
								<FaSquareXTwitter className="social-size" />
							</a>
						</li>
						<li className="social-icon_item">
							<a className="social-icon_link" href="https://www.instagram.com/">
								<FaInstagram className="social-size" />
							</a>
						</li>
						<li className="social-icon_item">
							<a className="social-icon_link" href="https://www.linkedin.com/home">
								<FaLinkedin className="social-size" />
							</a>
						</li>
					</ul>
					<ul className="menu">
						<li className="menu_item">
							<a className="menu_link" href="#">
								Home
							</a>
						</li>
						<li className="menu_item">
							<a className="menu_link" href="#">
								About
							</a>
						</li>
						<li className="menu_item">
							<a className="menu_link" href="#">
								Services
							</a>
						</li>
						<li className="menu_item">
							<a className="menu_link" href="#">
								Team
							</a>
						</li>
						<li className="menu_item">
							<a className="menu_link" href="#">
								Contact
							</a>
						</li>
					</ul>
					<p>&copy;2023 CodersPoint | All Rights Reserved</p>
				</footer>
			</div>
		</>
	);
};

export default Home;
