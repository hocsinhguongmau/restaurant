import React, {useState, useEffect, useLayoutEffect, useCallback} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Restaurants from "../components/Restaurants/Restaurants";
import Input from "../components/Input/Input";
import Welcome from "../components/Welcome/Welcome";

import {sortNameAsc, sortNameDesc} from "../utils/Sort";

import data from "../services/restaurants.json";

export default function Layout() {
	const [isOnline, setIsOnline] = useState(false);
	const [sort, setSort] = useState(null);
	const [restaurants, setRestaurants] = useState(data.restaurants);

	const showOnlineHandler = () => {
		setIsOnline(!isOnline);
	};

	const sortingHandler = e => {
		setSort(e.target.value);
	};

	const loadData = () => {
		let dataValue = restaurants;
		const sortFunction = (sortData) => {
			const newArray = [...sortData];
			if (sort === "0") {
				sortNameAsc(newArray);
			} else if (sort === "1") {
				sortNameDesc(newArray);
			}
			dataValue = newArray;
		};
		if (isOnline) {
			dataValue = restaurants.filter(
				restaurant => restaurant.online === isOnline
			);
			sortFunction(dataValue);
		} else {
			dataValue = data.restaurants;
			sortFunction(dataValue);
		}

		setRestaurants(dataValue);
	};

	useEffect(() => {
		loadData();
	}, [sort, isOnline]);

	return (
		<div>
			<Header />
			<Input
				online={isOnline}
				showOnlineClick={showOnlineHandler}
				sort={sortingHandler}
			/>
			<main>
				<Welcome />
				<Restaurants data={restaurants} />
			</main>
			<Footer />
		</div>
	);
}
