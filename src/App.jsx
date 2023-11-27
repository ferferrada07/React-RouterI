import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import "./App.css";
import {Routes, Route} from "react-router-dom"

function App() {
	return (
		<div className="App">
			<header>
				<Navbar></Navbar>
			</header>

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contacto" element={<Contacto />} />
				</Routes>
			</main>
			<footer>
				<Footer></Footer>
			</footer>
		</div>
	);
}

export default App;