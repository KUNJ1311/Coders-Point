import Home from "./components/HomePage/Home";
import HomeChat from "./components/MainApp/HomeChat/HomeChat";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserState from "./components/context/UserState";
import RefreshState from "./components/context/RefreshState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthorizeUser } from "./components/middleware/auth";
import { Tooltip } from "react-tooltip";
import MainContent from "./components/MainApp/Maincontent/MainContent";
import { useSelector } from "react-redux";

function App() {
	const mode = useSelector((state) => state.themeKey);

	return (
		<>
			<UserState>
				<RefreshState>
					<Router>
						{/* Alert */}
						<ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} draggable pauseOnHover theme="light" />
						{/* Tooltip Component */}
						<Tooltip id="my-tooltip" className={mode ? "" : "lightMode"} opacity={1} />
						<Tooltip id="my-tooltip-big" className={mode ? "" : "lightMode"} opacity={1} />
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							{/* Authorized Routes */}

							<Route
								path="/mainapp"
								element={
									<AuthorizeUser>
										<HomeChat />
									</AuthorizeUser>
								}
							/>
							<Route
								path="/mainapp/chat/:_id"
								element={
									<AuthorizeUser>
										<MainContent />
									</AuthorizeUser>
								}
							/>
						</Routes>
					</Router>
				</RefreshState>
			</UserState>
		</>
	);
}

export default App;
