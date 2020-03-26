import React from "react";

const Backdrop = props => {
	return (
		<div
			className={`backdrop ${props.show ? "show-backdrop" : ""}`}
			onClick={props.closeModal}
		></div>
	);
};

export default Backdrop;
