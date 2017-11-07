module.exports = {
	jumpTitleLink(e) {
		// console.log("12321");
		const dataset = e.currentTarget.dataset;
		const path = dataset.path ? dataset.path : "";
		if (path) {
			wx.navigateTo({
				url: path
			});
		}
	}
};
