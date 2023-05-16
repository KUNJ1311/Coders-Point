import React, { useState } from "react";
import "./maincontent.css";
import { HiChatAlt } from "react-icons/hi";
import { IoAddCircle } from "react-icons/io5";
const MainContent = () => {
	const [value, setValue] = useState("");

	//* change text area height dynamically
	function handleChange(event) {
		setValue(event.target.value);
		event.target.style.height = "auto";
		event.target.style.height = `${event.target.scrollHeight}px`;
	}

	return (
		<>
			<div className="maincontent">
				<section className="align-c d-flex">
					<div className="relative" style={{ flex: "1 1 auto" }}>
						<div className="maincontent-title">
							<div>
								<HiChatAlt className="big-type-svg" fill="#96969a" />
							</div>
							<span>General</span>
						</div>
					</div>
				</section>
				<main>
					<div style={{ overflow: "auto", display: "flex", flex: "1 1 auto", flexDirection: "column" }}>
						<div className="chat-area">
							<div style={{ color: "white", padding: "70px" }}>
								<h1>Just Testing For Scroll</h1>
								<h2 style={{ marginTop: "40px", marginBottom: "20px", fontSize: "24px" }}>Introduction to React.js</h2>

								<p style={{ marginBottom: "20px" }}>
									<strong>React.js</strong> is a popular <em>JavaScript library</em> used for building <em>user interfaces</em>. It was developed by Facebook and is now maintained by a community of developers.
								</p>

								<h3 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "20px" }}>Virtual DOM</h3>

								<p style={{ marginBottom: "20px" }}>
									One of the key features of React is its <em>virtual DOM</em>, which allows React to update the UI efficiently by only rendering the components that have changed. This means that React can update the UI much faster than traditional web applications.
								</p>

								<h3 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "20px" }}>Server-Side Rendering</h3>

								<p style={{ marginBottom: "20px" }}>React also supports server-side rendering, which can improve performance and SEO by making the content available to search engines and users before the JavaScript is loaded.</p>

								<h3 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "20px" }}>Component-Based Architecture</h3>

								<p style={{ marginBottom: "20px" }}>React uses a component-based architecture, which means that developers can create reusable components that can be combined to create complex interfaces. This makes it easy to create modular and maintainable code.</p>

								<h3 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "20px" }}>Declarative Programming Model</h3>

								<p style={{ marginBottom: "20px" }}>React has a declarative programming model, which allows developers to describe how the UI should look at any given time, rather than how to change it over time. This makes it easier to reason about the behavior of the UI and to debug problems.</p>

								<p>Overall, React is a powerful and flexible library that is widely used for building modern web applications. Whether you're building a simple website or a complex web application, React can help you to build interfaces that are fast, responsive, and easy to maintain.</p>
								<div className="invi-block"></div>
							</div>
						</div>
						<form className="chat-form">
							<div className="chat-input">
								<div className="auto-height">
									<div style={{ display: "flex", alignItems: "flex-start", flex: "0 0 auto" }}>
										<button className="add-btn">
											<IoAddCircle />
										</button>
									</div>
									<div style={{ display: "flex", alignItems: "center", flex: "1 1 auto", minHeight: "44px" }}>
										<textarea value={value} onChange={handleChange} rows={1} type="text" placeholder="Message #General" />
									</div>
								</div>
							</div>
						</form>
					</div>
				</main>
			</div>
		</>
	);
};

export default MainContent;
