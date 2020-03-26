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

export {sortNameAsc,sortNameDesc};
