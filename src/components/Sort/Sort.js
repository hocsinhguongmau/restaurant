import React from "react";

const Sort = props => (
	<div className="sort">
		<select
			defaultValue={"DEFAULT"}
			className="order"
			onChange={props.sort}
		>
			<option value="DEFAULT" disabled>
				Select your option
			</option>
			<option value={0}>Order by name Ascending</option>
			<option value={1}>Order by name Descending</option>
		</select>
		<button
			className={`online-btn ${props.online ? "active" : ""}`}
			onClick={props.showOnlineClick}
		>
			Online only
		</button>
	</div>
);

export default Sort;
