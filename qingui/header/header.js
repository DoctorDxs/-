var app = getApp();
const api = require("../../utils/api");
module.exports = {
    scan() {
        //要求版本1.2
        wx.scanCode({
            success: res => {
                console.log(res);
            }
        });
    },
    // 获取搜索框的值
    bindinput(e) {
        this.data.search_msg = e.detail.value;
    },
    // 监听enter键 执行搜索操作
    bindconfirm(e) {
        this.data.search_msg = e.detail.value;
        this.productSearch();
    },
    // 商品搜索
    productSearch(e) {
        app.fetch.get(
            api.pro_search,
            { key: this.data.search_msg, rank_type: "rank" },
            res => {
                if (res && res.data.code && res.data.data) {
                    wx.setStorageSync("_search_data", res.data.data);
                    wx.navigateTo({
                        url: "../product/index?key=" + this.data.search_msg
                    });
                }
            }
        );
    }
};
