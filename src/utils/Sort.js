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

const sortFunction = (sortData, sortValue) => {
	const newArray = [...sortData];
	if (sortValue === "0") {
		sortNameAsc(newArray);
	} else if (sortValue === "1") {
		sortNameDesc(newArray);
	}
	return newArray;
};

export {sortFunction};
