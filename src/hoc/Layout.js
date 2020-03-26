import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Restaurants from "../components/Restaurants/Restaurants";
import Input from "../components/Input/Input";
import Welcome from "../components/Welcome/Welcome";
import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";

import {sortFunction} from "../utils/Sort";
import {tagFunction} from "../utils/TagFilter";
import {getLocation} from "../utils/Location";

import data from "../services/restaurants.json";

export default function Layout() {
	const [isOnline, setIsOnline] = useState(false);
	const [sort, setSort] = useState(null);
	const [tag, setTag] = useState(null);
	const [restaurants, setRestaurants] = useState(data.restaurants);
	const [openModal, setOpenModal] = useState(false);
	const [location, setLocation] = useState({name: "", lat: null, lng: null});

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

	const closeModalHandler = e => {
		e.preventDefault();
		setOpenModal(false);
	};

	const viewFullItemsHandler = () => {
		setTag(null);
	};
	const googleMapHandler = e => {
		e.preventDefault();

		setLocation(
			getLocation(
				e.target.getAttribute("data-map"),
				e.target.getAttribute("data-name")
			)
		);
		setOpenModal(true);
	};
	const loadData = () => {
		let dataValue;

		if (isOnline) {
			dataValue = tagFunction(
				data.restaurants.filter(
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
	}, [sort, isOnline, tag, location]);

	return (
		<div>
			<Header />

			<Modal
				lat={location.lat}
				lng={location.lng}
				name={location.name}
				show={openModal}
				closeModal={closeModalHandler}
			/>
			<Backdrop show={openModal} closeModal={closeModalHandler} />
			<Input
				online={isOnline}
				showOnlineClick={showOnlineHandler}
				sort={sortingHandler}
			/>
			<main>
				<Welcome />
				<Restaurants
					data={restaurants}
					tagFilter={tagFilterHandler}
					activeTag={tag}
					viewFullItems={viewFullItemsHandler}
					mapLocation={googleMapHandler}
				/>
			</main>
			<Footer />
		</div>
	);
}
