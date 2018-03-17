module.exports = (...rest) => {
	let objs = {}
	let objsData = {};
	rest.map(item => {
		objsData = Object.assign({}, objsData, item.data && typeof item === "object" ? item.data : {});
	});

	objs = Object.assign({}, ...rest);
	objs.data = objsData;
	return objs;
};