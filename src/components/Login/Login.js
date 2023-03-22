import React, { useRef, useState } from "react";
import "./login.css";

export default function Login() {
	const [isActive, setIsActive] = useState(false);
	const [isScaled, setIsScaled] = useState(false);
	const overlayBtnRef = useRef(null);
	function togglePanel() {
		setIsActive(!isActive);
		setIsScaled(!isScaled);
		overlayBtnRef.current.classList.add("btnscaled");
	}
	return (
		<>
			<section className="sec">
				<div className={`container ${isActive ? "right-panel-active" : ""}`} id="container">
					{isActive ? (
						<div className="form-container sign-up-container">
							<form action="#" className="form-login">
								<h1 className="h">Create Account rohit</h1>
								<div className="social-container">
									<a className="social">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a className="social">
										<i className="fab fa-google-plus-g"></i>
									</a>
									<a className="social">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</div>
								<span>or use your email for registration</span>
								<div className="infield">
									<input type="text" placeholder="Name" />
									<label></label>
								</div>
								<div className="infield">
									<input type="email" placeholder="Email" name="email" />
									<label></label>
								</div>
								<div className="infield">
									<input type="password" placeholder="Password" />
									<label></label>
								</div>
								<button>Sign 1Up</button>
							</form>
						</div>
					) : (
						<div className="form-container sign-in-container">
							<form action="#" className="form-login">
								<h1 className="h">Sign in</h1>
								<div className="social-container">
									<a className="social">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a className="social">
										<i className="fab fa-google-plus-g"></i>
									</a>
									<a className="social">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</div>
								<span>or use your account</span>
								<div className="infield">
									<input type="email" placeholder="Email" name="email" />
									<label></label>
								</div>
								<div className="infield">
									<input type="password" placeholder="Password" />
									<label></label>
								</div>
								<a href="#" className="forgot">
									Forgot your password?
								</a>
								<button>Sign In</button>
							</form>
						</div>
					)}
					<div className="overlay-container" id="overlayCon">
						<div className="overlay">
							{isActive ? (
								<div className="overlay-panel overlay-left">
									<h1 className="h">Welcome Back!</h1>
									<p>To keep connected with us please login with your personal info</p>
									<button>Sign In</button>
								</div>
							) : (
								<div className="overlay-panel overlay-right">
									<h1 className="h">Hello, Friend!</h1>
									<p>Enter your personal details and start journey with us</p>
									<button>Sign Up</button>
								</div>
							)}
						</div>
						<button ref={overlayBtnRef} className={`overlaybtn ${isScaled ? "btnscaled" : ""}`} onClick={togglePanel} id="overlayBtn"></button>
					</div>
				</div>
			</section>

			{/* <script>
				const container=document.getelementbyid('container')
				const overlayCon=document.getelementbyid('overlayCon')
				const overlayBtn=document.getelementbyid('overlayBtn')

				overlaybtn.addevetnlistner('click',()=>{
					Container.classlist.toggle('right-panel-active')

				overlaybtn.classlist.remove('btnscaled);
				window.requestanimationframe(()=>{
					overlaybtn.classlist.add("btnscaled");
				})
				})

			</script>
 		*/}
		</>
	);
}
