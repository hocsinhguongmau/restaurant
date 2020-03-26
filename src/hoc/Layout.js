import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Restaurants from "../components/Restaurants/Restaurants";
import Input from "../components/Input/Input";
import Welcome from "../components/Welcome/Welcome";

import {sortFunction} from "../utils/Sort";
import {tagFunction} from "../utils/TagFilter";

import data from "../services/restaurants.json";

export default function Layout() {
	const [isOnline, setIsOnline] = useState(false);
	const [sort, setSort] = useState(null);
	const [tag, setTag] = useState(null);
	const [restaurants, setRestaurants] = useState(data.restaurants);

	const showOnlineHandler = () => {
		setIsOnline(!isOnline);
	};

	const sortingHandler = e => {
		setSort(e.target.value);
	};

	const tagFilterHandler = e => {
		e.preventDefault();
		const dataTag = e.target.getAttribute("data-tag");
		setTag(dataTag);
	};

	const loadData = () => {
		let dataValue;

		if (isOnline) {
			dataValue = tagFunction(
				restaurants.filter(
					restaurant => restaurant.online === isOnline
				),
				tag
			);

			dataValue = sortFunction(dataValue, sort);
		} else {
			dataValue = tagFunction(data.restaurants, tag);
			dataValue = sortFunction(dataValue, sort);
		}

		setRestaurants(dataValue);
	};

	useEffect(() => {
		loadData();
	}, [sort, isOnline, tag]);

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
				<Restaurants data={restaurants} tagFilter={tagFilterHandler} />
			</main>
			<Footer />
		</div>
	);
}
