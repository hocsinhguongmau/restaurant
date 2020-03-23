import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Restaurants from "../components/Restaurants/Restaurants";
import Welcome from "../components/Welcome/Welcome";

import data from "../services/restaurants.json";

export default function Layout() {
	const [isOnline, setIsOnline] = useState(false);
	const [restaurants, setRestaurants] = useState(data.restaurants);

	const handlerOnline = () => {
		setIsOnline(!isOnline);
	};

	useEffect(() => {
		if (isOnline) {
			setRestaurants(
				data.restaurants.filter(
					restaurant => restaurant.online === isOnline
				)
			);
		} else {
			setRestaurants(data.restaurants);
		}
	}, [isOnline]);

	return (
		<div>
			<Header />
			<main>
				<Welcome />
				<Restaurants data={restaurants} />
			</main>
			<Footer />
		</div>
	);
}
