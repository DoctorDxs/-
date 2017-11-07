module.exports = {
    onOpenMapTap: function(e) {
        console.log(3434);
        //打开地图
        const latitude = parseFloat(e.currentTarget.dataset.lat);
        const longitude = parseFloat(e.currentTarget.dataset.lng);
        wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28,
            name: this.data.name
        });
    },
    onCallPhoneTap: function(e) {
        //拨打电话
        let phoneNum = e.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: phoneNum
        });
    }
};
