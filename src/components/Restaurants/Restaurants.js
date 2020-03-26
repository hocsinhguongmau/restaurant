import React from "react";

import Restaurant from "./Restaurant/Restaurant";

const Restaurants = props => {
	return (
		<div className="container clearfix">
			{props.activeTag !== null ? (
				<button onClick={props.viewFullItems} className="back-btn">Go back</button>
			) : (
				""
			)}

			{props.data.map((item, index) => (
				<Restaurant
					key={`restaurant-${index}`}
					index={index}
					image={item.image}
					name={item.name}
					online={item.online}
					description={item.description}
					delivery_price={item.delivery_price}
					currency={item.currency}
					tags={item.tags}
					city={item.city}
					location={item.location}
					tagClicked={props.tagFilter}
					mapClicked={props.mapLocation}
				/>
			))}
		</div>
	);
};

export default Restaurants;
