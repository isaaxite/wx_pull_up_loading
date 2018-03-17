module.exports = {
	data: {
		pullUpLoading: { isShow: false }
	},
	IsInPullUpLoading() {
		const isInLoading = this.data.pullUpLoading.isShow;
		if (isInLoading) { console.log("上拉加载中...") }
		return isInLoading;
	},
	startPullUpLoading(callback) {
		if(!this.IsInPullUpLoading()) {
			this.setData({ 'pullUpLoading.isShow': true });
			callback && callback();
		} else {
			console.log("上拉加载中...");
		}
	},
	stopPullUpLoading() {
		this.setData({ 'pullUpLoading.isShow': false });
	}
};