const app = getApp()
Page({
  data: {
    MINA: [
      {
        top:0,
        left:0,
        width:375,
        height:200,
        border_radius:'',
        rotate:'',
        position:'',
        border:'',
        opacity:'',
        bgImg:'http://pic6.wed114.cn/20140729/2014072920271151.jpg',
        logo: '',
        name: 'tttt',
        info: '这是一个小程序',
        appid: ''
      }
    ]
  },
  onLoad: function () {
    this.requestData()
  },
  // 请求数据
  requestData: function () {
    var that = this;
    wx.request({
      url: 'https://baas.qingful.com/1.0/class/api/table/pages',
      method: 'get',
      data: {},
      header: {
        'content-type': 'application/json',
        "x-qingful-appid": '957376595583',
        "x-qingful-appkey": 'MfDapOmyptlLyxcDEQROGLgE',
        "Authorization": wx.getStorageSync('Authorization')
      },
      success: function (res) {
        // console.log(res.data.data[0])
        // // var pageData = JSON.parse(res.data.data[0]);
        // that.setData({
        //   pageData: pageData
        // })
      }
    })
  },
  onClick: function (e) {
    var that = this;
    var click_type = e.currentTarget.dataset.click;
    var skip_path = e.currentTarget.dataset.skippath;
    if (click_type == '') {
      wx.showModal({
        title: '当前点击未设置事件',
      })
      return false
    } else if (click_type == 'page-skip') {
      wx.navigateTo({
        url: skip_path,
      })
    } else if (click_type == 'address-skip') {
      console.log('打开地图')
    } else if (click_type == 'call-phone') {
      wx.makePhoneCall({
        phoneNumber: skip_path
      })
    } else if (click_type == 'share-to') {
      wx.showModal({
        title: '分享功能不能设置在文本框上',
      })
    }
  },
  // 省市区
  chooseCity: function (e) {
    var region = e.detail.value;
    var index = e.currentTarget.dataset.index;
    this.data.formdata.regionpicker[index].region = region;
    this.setData({
      formdata: this.data.formdata
    })
  },
  // 年月日
  chooseDate: function (e) {
    var date = e.detail.value.split('-');
    var index = e.currentTarget.dataset.index;
    this.data.formdata.datepicker[index].date = date;
    this.setData({
      formdata: this.data.formdata
    })
  },
  // 时间
  chooseTime: function (e) {
    var time = e.detail.value.split(':');
    var index = e.currentTarget.dataset.index;
    this.data.formdata.timepicker[index].time = time;
    this.setData({
      formdata: this.data.formdata
    })
  },
  // 表单提交
  formSubmit: function (e) {
    console.log(e)
  },
  // 分享设置

})
