import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Restaurants from "../components/Restaurants/Restaurants";
import Sort from "../components/Sort/Sort";
import Welcome from "../components/Welcome/Welcome";
import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";

import data from "../services/restaurants.json";

const restaurantsData = data.restaurants;

const sortNameAsc = variable => {
	variable.sort((a, b) => {
		if (a.name.toUpperCase() > b.name.toUpperCase()) {
			return 1;
		}
		if (b.name.toUpperCase() > a.name.toUpperCase()) {
			return -1;
		}

		return 0;
	});
};
const sortNameDesc = variable => {
	variable.sort((a, b) => {
		if (a.name.toUpperCase() < b.name.toUpperCase()) {
			return 1;
		}
		if (b.name.toUpperCase() < a.name.toUpperCase()) {
			return -1;
		}

		return 0;
	});
};

class Layout extends Component {
	state = {
		restaurants: restaurantsData,
		oldState: restaurantsData,
		showOnline: false,
		currentTag: false,
		location: {
			name: "",
			lat: false,
			lng: false
		},
		showModal: false
	};

	sortingHandler = e => {
		const newRestaurants = this.state.restaurants;
		const oldRestaurants = this.state.oldState;

		if (e.target.value === "0") {
			sortNameAsc(newRestaurants);
			sortNameAsc(oldRestaurants);
		} else {
			sortNameDesc(newRestaurants);
			sortNameDesc(oldRestaurants);
		}
		this.setState({restaurants: newRestaurants, oldState: oldRestaurants});
	};

	showOnlineHandler = () => {
		if (!this.state.showOnline) {
			const onlineRestaurants = this.state.restaurants.filter(
				item => item.online
			);
			this.setState({
				restaurants: onlineRestaurants,
				showOnline: !this.state.showOnline
			});
		} else {
			let oldStateWithTag = this.state.oldState;
			const currentTag = this.state.currentTag;

			if (currentTag !== false) {
				console.log(currentTag);
				oldStateWithTag = oldStateWithTag.filter(o =>
					o.tags.some(tag => currentTag.has(tag))
				);
			}
			this.setState({
				restaurants: oldStateWithTag,
				showOnline: !this.state.showOnline
			});
		}
	};

	tagFilterHandler = e => {
		e.preventDefault();
		const filterByTags = [e.target.getAttribute("data-tag")];
		const filterByTagSet = new Set(filterByTags);
		let oldState = this.state.oldState;
		if (this.state.showOnline) {
			oldState = oldState.filter(item => item.online);
		}
		const result = oldState.filter(o =>
			o.tags.some(tag => filterByTagSet.has(tag))
		);

		this.setState({restaurants: result, currentTag: filterByTagSet});
	};

	googleMapHandler = e => {
		e.preventDefault();
		const coordinates = e.target.getAttribute("data-map");
		const restaurantName = e.target.getAttribute("data-name");
		const parts = coordinates.split(",");
		const lng = parseFloat(parts[0]),
			lat = parseFloat(parts[1]);

		this.setState({
			location: {name: restaurantName, lat: lat, lng: lng},
			showModal: true
		});
	};

	closeModal = e => {
		e.preventDefault();
		this.setState({showModal: false});
	};

	render() {
		return (
			<div>
				<Header />
				<Modal
					lat={this.state.location.lat}
					lng={this.state.location.lng}
					name={this.state.location.name}
					show={this.state.showModal}
					closeModal={this.closeModal}
				/>
				<Backdrop show={this.state.showModal} closeModal={this.closeModal}/>
				<main>
					<Welcome />
					<Sort
						sort={this.sortingHandler}
						online={this.state.showOnline}
						showOnlineClick={this.showOnlineHandler}
					/>
					<Restaurants
						tagFilter={this.tagFilterHandler}
						data={this.state.restaurants}
						mapLocation={this.googleMapHandler}
					/>
				</main>
				<Footer />
			</div>
		);
	}
}

export default Layout;
