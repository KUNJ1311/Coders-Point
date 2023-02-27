import Home from "./components/Home";
import MainApp from "./components/MainApp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/mainapp" element={<MainApp />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
