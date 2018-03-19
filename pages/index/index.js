const app = getApp();
const { extend, pullUpLoading } = require("../../pullUpLoading/index.js");

Page(extend(pullUpLoading, {
	data: {
		list: _createData(20),
	},
	onLoad() {
		console.log("page start");
	},
	fetchData() {
		const _this = this;
		const delay = 3000;

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				return resolve(_createData(20));
			}, delay);
		});
	},
	pullUpLoadingEvent() {
		const _this = this;

		_this.startPullUpLoading(startTime => {
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
	let data = new Array(count);
	return data;
}