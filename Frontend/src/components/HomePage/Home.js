import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import "./Home.css";
import coder from "./g8.svg";
import { useNavigate } from "react-router-dom";
import home from "./img/banner-bg.png";
import PrinterAnimation from "./PrinterAnimation";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

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
                    <div className="coders-image">
                        <PrinterAnimation />
                    </div>
                </div>
                <div className="lorem">
                    Want to code together,Ajaoo
                    <br />
                    Want to chat while Coding, Ajaoo
                    <br />
                    Want to Share Screen while coding ,Ajaoo
                    <br />
                </div>

                {/* Combine CodingWebsiteContainer here */}
                <div className="container">
                    <h1>Welcome to our Coding Website!</h1>
                    <p className="subtitle">Owned by "THIK HAI" group</p>
                    <div className="content">
                        <h2>Kunjika</h2>
                        <ul>
                            <li><a href="#">Bgmi player</a></li>
                            <li><a href="#">Decent coder</a></li>
                            <li><a href="#">Scared of Father</a></li>
                        </ul>
                    </div>
                    <div className="content">
                        <h2>Rishi</h2>
                        <ul>
                            <li><a href="#">Sucker at every Game</a></li>
                            <li><a href="#">The one who always cry</a></li>
                            <li><a href="#">Although Gentleman!!!</a></li>
                        </ul>
                    </div>
					<div className="content">
                        <h2>Dhruvin</h2>
                        <ul>
                            <li><a href="#">Expert at every Game</a></li>
                            <li><a href="#">The one who always Smiles</a></li>
                            <li><a href="#">Roaster!!!</a></li>
                        </ul>
                    </div>
					<div className="content">
                        <h2>Rohit</h2>
                        <ul>
                            <li><a href="#">#Bakri</a></li>
                            <li><a href="#">Always cry for best friend</a></li>
                            <li><a href="#">Always Acts like GAY!!!</a></li>
                        </ul>
                    </div>
                   
                </div>

				
                {/* End of Combined CodingWebsiteContainer */}
                
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
                            <RiInstagramFill className="social-size"/>

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
