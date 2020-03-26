const getLocation = (dataMap, dataName) => {
	const coordinates = dataMap;
	const restaurantName = dataName;
	const parts = coordinates.split(",");
	const lng = parseFloat(parts[0]),
		lat = parseFloat(parts[1]);
	return {name: restaurantName, lat: lat, lng: lng};
};

export {getLocation};
