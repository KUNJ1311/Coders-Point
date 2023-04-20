import Home from "./components/HomePage/Home";
import MainApp from "./components/MainApp/MainApp";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/mainapp" element={<MainApp />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
