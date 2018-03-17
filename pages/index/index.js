const app = getApp();
const pullUpLoading = require("../../pullUpLoading/index.js");

Page(Object.assign(pullUpLoading, {
	data: {
		list: _createData(20),
		pullUpLoading: { isShow: false }
	},
	onLoad() {
		console.log("page start");
	},
	fetchData() {
		const _this = this;
		const delay = 2000;

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				return resolve(_createData(20));
			}, delay);
		});
	},
	pullUpLoadingEvent() {
		const _this = this;
		const minDelay = 3000;
		const startTime = Date.now();

		_this.startPullUpLoading(() => {
			_this.fetchData()
			.then(_list => {
				_this.setData({ list: [..._this.data.list, ..._list] });
				_this.stopPullUpLoading();
			})
			.catch(errMsg => {
				console.log(errMsg);
			});
		});
	}
}));

function _createData(count) {
	let data = [];
	for (let i = 0; i < count; i++) {
		data.push(`list item ${i + 1}`);
	}

	return data;
}