import Home from "./components/HomePage/Home";
import MainApp from "./components/MainApp/MainApp";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserState from "./components/context/UserState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthorizeUser } from "./components/middleware/auth";
import { Tooltip } from "react-tooltip";
import MainContent from "./components/MainApp/Maincontent/MainContent";
import HomeChat from "./components/MainApp/HomeChat/HomeChat";

function App() {
	return (
		<>
			<UserState>
				<Router>
					{/* Alert */}
					<ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} draggable pauseOnHover theme="light" />
					{/* Tooltip Component */}
					<Tooltip id="my-tooltip" />
					<Tooltip id="my-tooltip-big" />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						{/* Authorized Routes */}

						<Route
							path="/mainapp"
							element={
								<AuthorizeUser>
									<MainApp />
								</AuthorizeUser>
							}
						/>
						<Route path="mainapp/chat/:_id" element={<MainContent />} />
					</Routes>
				</Router>
			</UserState>
		</>
	);
}

export default App;
