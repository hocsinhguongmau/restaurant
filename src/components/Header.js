import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
	return (
		<header>
			<div className="logo">
				<a href="">
					<img src={logo} alt="" />
				</a>
			</div>
		</header>
	);
};

export default Header;
