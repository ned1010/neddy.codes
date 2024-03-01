import { useEffect, useState } from "react";
import NavContext from "../NavContext";

const NavProvider = ({ children }) => {
	//this is for determining whether it is in the mobile view or not
	const [isMobileView, setIsMobileView] = useState(false);

	//make mobile menu visiable or not
	const [isVisible, setIsVisible] = useState(false);

	const toggleNav = () => {
		//set isMobileView to true if the window size is less than < 767
		setIsMobileView(window.innerWidth < 767);
	};

	const toggleVisible = () => {
		setIsVisible(!isVisible);
	};

	useEffect(() => {
		//Toggle Nav
		toggleNav();
		//make the toggleNav determine the size
		window.addEventListener("resize", toggleNav);

		return () => {
			window.removeEventListener("resize", toggleNav);
		};
	}, []);

	//
	return (
		<NavContext.Provider value={{ isMobileView, toggleNav, isVisible, toggleVisible }}>
			{children}
		</NavContext.Provider>
	);
};

export default NavProvider;
