import "./App.css";
import Home from "@/pages/Home";
import Works from "@/components/works/Works";
import Work from "./components/works/Work";
import About from "@/components/about/About";

import ThemeProvider from "@/context/providers/ThemeProvider";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "@/components/nav/Nav";
import Social from "@/components/social/Social";
import NavProvider from "@/context/providers/NavProvider";

function App() {
	return (
		<BrowserRouter>
			<NavProvider>
				<ThemeProvider>
					<Nav />
					<Social />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/work/" element={<Works />} />
						<Route path="/work/:id" element={<Work />} />
					</Routes>
				</ThemeProvider>
			</NavProvider>
		</BrowserRouter>
	);
}

export default App;
