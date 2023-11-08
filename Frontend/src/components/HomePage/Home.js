import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import "./Home.css";
import coder from "./g8.svg";
import { useNavigate } from "react-router-dom";
import home from "./banner-bg.png"
const Home = () => {
	const Navigate = useNavigate();

	const [state] = useState({
		title: "Welcome To",
		title_two: "Coders Point",
	});

	//* Check Token to redirect user to main app
	useEffect(() => {
		async function checkToken() {
			const token = localStorage.getItem("coderToken");
			if (token) {
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
						<div className="text">
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
					<div className="coders-image">
						<img src={coder} width="400px" height="400px" alt="" />
					</div>
				</div>
			</div>
			<div className="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In perferendis recusandae itaque. Nostrum expedita voluptatibus et corporis quod doloribus nobis optio illum amet. Reiciendis, saepe facilis minima ducimus corrupti cumque!</div>
			<footer class="footer">
				<div class="waves">
					<div class="wave" id="wave1"></div>
					<div class="wave" id="wave2"></div>
					<div class="wave" id="wave3"></div>
					<div class="wave" id="wave4"></div>
				</div>
				<ul class="social-icon">
					<li class="social-icon_item"><a class="social-icon_link" href="#">
						<ion-icon name="logo-facebook"></ion-icon>
					</a></li>
					<li class="social-icon_item"><a class="social-icon_link" href="#">
						<ion-icon name="logo-twitter" alt="twitter"></ion-icon>
					</a></li>
					<li class="social-icon_item"><a class="social-icon_link" href="#">
						<ion-icon name="logo-linkedin"></ion-icon>
					</a></li>
					<li class="social-icon_item"><a class="social-icon_link" href="#">
						<ion-icon name="logo-instagram"></ion-icon>
					</a></li>
				</ul>
				<ul class="menu">
					<pre><li class="menu_item"><a class="menu_link" href="#">Home</a></li>
					<li class="menu_item"><a class="menu_link" href="#">About</a></li>
					<li class="menu_item"><a class="menu_link" href="#">Services</a></li>
					<li class="menu_item"><a class="menu_link" href="#">Team</a></li>
					<li class="menu_item"><a class="menu_link" href="#">Contact</a></li>
					</pre>
				</ul>
				<p>&copy;2023 CodersPoint | All Rights Reserved</p>
			</footer>
		</>
	);
};

export default Home;
