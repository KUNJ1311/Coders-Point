import React from "react";
import { useState } from "react";
import "./login.css";

export default function Login() {
	const [clicked, setClicked] = useState(false)
	
	const handleClick =()=>
	{
		setClicked(!clicked);
	}
	const container = () => {
		document.getElementById("container");
	  };
	  const signUpButton = () => {
		container.classList.add("right-panel-active");
	  };
	  const signInButton = () => {
		container.classList.remove("right-panel-active");
	  };
	
	return (
		<>
		
			<section className="sec">
				<div className="container" id="container">
				{clicked ? (
				<div className="form-container sign-up-container">
					<form action="#">
						<h1 className="h">Create Account</h1>
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
						<button className="robtn" onClick={()=>console.log("rohit")}>Sign Up</button>
					</form>
				</div>) : (
				<div className="form-container sign-in-container">
					<form action="#">
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
						<button className="robtn" onClick={()=>console.log("rohit")}>Sign In</button>
					</form>
				</div>)}
				<div className="overlay-container" id="overlayCon">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1 className="h">Welcome Back!</h1>
							<p className="p">To keep connected with us please login with your personal info</p>
							<button className="robtn" onClick={()=>console.log("rohit")}>Sign In</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1 className="h">Hello, Friend!</h1>
							<p className="p">Enter your personal details and start journey with us</p>
							<button className="robtn" >Signs Up</button>
						</div>
					</div>
					<button id="overlayBtn" onClick={handleClick}></button>
					</div>
			</div>
			</section>


			{/* <script>
				const container=document.getelementbyid('container')
				const overlayCon=document.getelementbyid('overlayCon')
				const overlayBtn=document.getelementbyid('overlayBtn')

				overlaybtn.addevetnlistner('click',()=>{7
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
