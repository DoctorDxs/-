module.exports = {
  jumpSpecial(e) {
    // console.log(12312)
    const dataset = e.currentTarget.dataset;
    const path = dataset.path ? dataset.path : "";
    console.log(path)
		if (path) {
			wx.navigateTo({
				url: path
			});
		}
	}
};
