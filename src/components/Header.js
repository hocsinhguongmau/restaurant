import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
	return (
		<header>
			<div className="logo">
				<img src={logo} alt="" />
			</div>
		</header>
	);
};

export default Header;
