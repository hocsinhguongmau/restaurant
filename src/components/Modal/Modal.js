import React from "react";
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

const Modal = props => (
	<div className={`modal ${props.show ? "show-modal" : ""}`}>
		<h2 className="map-title">
			<span>{props.name}</span>{" "}
			<a href="" className="close-modal" onClick={props.closeModal}></a>
		</h2>
		<div className="map">
			<Map
				google={props.google}
				zoom={15}
				center={{lat: props.lat, lng: props.lng}}
			>
				<Marker position={{lat: props.lat, lng: props.lng}} />
			</Map>
		</div>
	</div>
);

export default GoogleApiWrapper({
	apiKey: "AIzaSyBAzefUe_rYcTwbNdiUPzjqRwpy6j1MCFs"
})(Modal);
