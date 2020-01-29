import React from "react";

const Restaurant = props => {
	const currency = e => {
		switch (e) {
			case "EUR":
				return "€";
				break;
			default:
				return "asd";
		}
	};
	return (
		<div className="col" key={`col-${props.index}`}>
			<div className="restaurant">
				<div
					className="image"
					style={{
						backgroundImage: `url(${props.image})`
					}}
					alt={props.name}
				></div>
				<h2 className="bigName">
					{props.name}
					<span
						className={`status ${
							props.online ? "online" : "offline"
						}`}
					></span>
				</h2>
				<div className="info">
					<h2 className="name">{props.name}</h2>
					<p className="description">{props.description}</p>
					<p className="delivery_price">
						Delivery price:{" "}
						{(props.delivery_price / 100).toFixed(2)}
						<span className="currency">
							{currency(props.currency)}
						</span>
					</p>
					<p className={props.online ? "open" : "closed"}>
						{props.online ? "Open" : "Closed"}
					</p>
					<p className="city">
						City: {props.city}
						<a
							className="map"
							data-map={props.location}
							data-name={props.name}
							href=""
							onClick={props.mapClicked}
						>
						</a>
					</p>
					<p className="tags">
						{props.tags.map((tag, index) => (
							<a
								href=""
								data-tag={tag}
								key={`tag-${index}`}
								onClick={props.tagClicked}
							>
								{tag}
							</a>
						))}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Restaurant;
