module.exports = {
  link(e) {
    const dataset = e.currentTarget.dataset;
    const appid = dataset.appid ? dataset.appid : "";
    if (appid) {
      wx.navigateToMiniProgram({
        appId: appid,
        success(res) {
          console.log('打开成功')
        }
      })
    }
  }
};
