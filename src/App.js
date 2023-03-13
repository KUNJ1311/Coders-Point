import Home from "./components/Home";
import MainApp from "./components/MainApp";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>

		   <Login/>
			{/* <Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/mainapp" element={<MainApp />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router> */}
		</>
	);
}

export default App;
