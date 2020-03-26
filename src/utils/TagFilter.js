const tagFilter = (tag,data) => {
	const filterByTags = [tag];
	const filterByTagSet = new Set(filterByTags);

	const result = data.filter(o =>
		o.tags.some(tag => filterByTagSet.has(tag))
	);
    return result;
};

const tagFunction = (dataFilter, tagValue) => {
    if (tagValue === null) {
        return dataFilter;
    } else {
        return tagFilter(tagValue, dataFilter);
    }
};
export {tagFilter, tagFunction};
