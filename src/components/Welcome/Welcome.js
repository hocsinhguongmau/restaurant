import React from "react";
import Ax from "../../hoc/Ax";

const Welcome = props => (
	<Ax>
		<h1 className="welcome">Welcome to Restaurant Picker!</h1>
		<p className="message">
			Please use the sort function to look for your desired restaurant.
		</p>
	</Ax>
);

export default Welcome;
