//index.js
//获取应用实例
var img = [
  {
    src: 'http://pic6.wed114.cn/20140729/2014072920271151.jpg',
    top: 0,
    left: 0,
    width: 375,
    height: 234,
    click_type: 'page-skip',
    skip_path: '../second/second',
    position: 'absolute',
    bgColor: '#fff',
    rotate: '',
    opacity: .6,
    border_radius: '',
    border: '1px solid red'
  },
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509531187978&di=6f7247b053d010c5d807c7a992ba7b99&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3528488243%2C2012796991%26fm%3D214%26gp%3D0.jpg',
    top: 1123,
    left: 23,
    width: 160,
    height: 120,
    click_type: 'call-phone',
    skip_path: '123456'
  },
  {
    src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2052596266,774131461&fm=27&gp=0.jpg',
    top: 1123,
    left: 200,
    width: 160,
    height: 120,
    click_type: 'open-map',
    skip_path: '["1233","55555"]'
  },
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509531639709&di=3bbf411ba5ea66794aebe73f4b8982fc&imgtype=0&src=http%3A%2F%2Fhome.7jj.me%2FAttachment%2FUploadFiles%2FWedding%2FRichEditor%2F02015110473917705594850.jpg',
    top: 1250,
    left: 23,
    width: 160,
    height: 120,
    click_type: 'on-share',
    skip_path: '123456'
  },
  {
    src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2193489547,96200625&fm=27&gp=0.jpg',
    top: 1250,
    left: 200,
    width: 160,
    height: 120,
    click_type: '',
    skip_path: '123456'
  },
],
  name = '首页',
  text = [
    {
      width: 100,
      height: '300',
      left: 10,
      top: 500,
      z_index: 1,
      bgColor: '#000',
      color: '#aaa',
      text_content: '双击此处进行编辑',
      click_type: 'call-phone',
      skip_path: '1234567898',
      border: '1px solid red',
      position: 'absolute',
      rotate: 'rotate(45deg)',
      opacity: .5,
      border_radius: 30,
      font_family: '微软雅黑',
      font_size: 16,
      font_weight: 'blod',
      text_decration: 'underline',
      text_indent: 10,
      letter_spacing: 10,
      text_align: 'center'
    },
    {
      width: 375,
      height: 110,
      left: 0,
      top: 200,
      z_index: 1,
      bgColor: '#fff',
      text_content: '',
      click_type: '',
      skip_path: '',
      border: '1px solid red',
      position: 'absolute',
      rotate: ''
    },
  ],
  formdata = {
    inputs: [
      {
        top: 800,
        left: 10,
        width: 150,
        height: 40,
        position: 'absolute',
        bgColor: '#ccc',
        color: 'red',
        font_size: 14,
        font_weight: '900',
        font_style: 'normal',
        text_align: 'left',
        rotate: 'rotate(0deg)',
        opacity: .5,
        border: '1px solid red',
        border_radius: '30rpx',
        'type': 'name',
        placeholder: '姓名',
      },
      {
        top: 870,
        left: 10,
        width: 150,
        height: 40,
        position: 'absolute',
        bgColor: '#ccc',
        color: 'red',
        font_size: 14,
        font_weight: '500',
        font_style: 'normal',
        text_align: 'right',
        rotate: 'rotate(0deg)',
        opacity: .5,
        border: '1px solid red',
        border_radius: '30rpx',
        'type': 'tel',
        placeholder: '手机号',
      },
      {
        top: 950,
        left: 10,
        width: 150,
        height: 40,
        position: 'absolute',
        bgColor: '#ccc',
        color: 'red',
        font_size: 14,
        font_weight: '500',
        font_style: 'normal',
        text_align: 'right',
        rotate: 'rotate(0deg)',
        opacity: .5,
        border: '1px solid red',
        border_radius: '30rpx',
        'type': 'email',
        placeholder: '邮箱',
      }
    ],
    region: [
      {
        top: 2000,
        left: 10,
        width: 200,
        height: 40,
        position: 'absolute',
        bgColor: '#ccc',
        color: 'red',
        font_size: 14,
        font_weight: '500',
        font_style: 'normal',
        text_align: 'right',
        rotate: 'rotate(0deg)',
        opacity: .5,
        border: '1px solid red',
        border_radius: '30rpx',
      },
      {
        top: 2060,
        left: 10,
        width: 200,
        height: 40,
        position: 'absolute',
        bgColor: '#ccc',
        color: 'red',
        font_size: 14,
        font_weight: '500',
        font_style: 'normal',
        text_align: 'right',
        rotate: 'rotate(0deg)',
        opacity: .5,
        border: '1px solid red',
        border_radius: '30rpx',
      },
    ],
    date: [
      {
        top: 2120,
        left: 10,
        width: 200,
        height: 40,
        position: 'absolute',
        bgColor: '#ccc',
        color: 'red',
        font_size: 14,
        font_weight: '500',
        font_style: 'normal',
        text_align: 'right',
        rotate: 'rotate(0deg)',
        opacity: .5,
        border: '1px solid red',
        border_radius: '30rpx',
      },
      {
        top: 2180,
        left: 10,
        width: 200,
        height: 40,
        position: 'absolute',
        bgColor: '#ccc',
        color: 'red',
        font_size: 14,
        font_weight: '500',
        font_style: 'normal',
        text_align: 'right',
        rotate: 'rotate(0deg)',
        opacity: .5,
        border: '1px solid red',
        border_radius: '30rpx',
      },
    ],
    time: [
      {
        top: 2240,
        left: 10,
        width: 200,
        height: 40,
        position: 'absolute',
        bgColor: '#ccc',
        color: 'red',
        font_size: 14,
        font_weight: '500',
        font_style: 'normal',
        text_align: 'right',
        rotate: 'rotate(0deg)',
        opacity: .5,
        border: '1px solid red',
        border_radius: '30rpx',
      },
      {
        top: 2300,
        left: 10,
        width: 200,
        height: 40,
        position: 'absolute',
        bgColor: '#ccc',
        color: 'red',
        font_size: 14,
        font_weight: '500',
        font_style: 'normal',
        text_align: 'left',
        rotate: 'rotate(0deg)',
        opacity: .5,
        border: '1px solid red',
        border_radius: '30rpx',
      },
    ],
    btn: {
      top: 2360,
      left: 10,
      width: 200,
      height: 40,
      position: 'absolute',
      bgColor: '#ccc',
      color: 'red',
      font_size: 14,
      font_weight: '500',
      font_style: 'normal',
      text_align: 'center',
      rotate: 'rotate(0deg)',
      opacity: .5,
      border: '1px solid red',
      border_radius: '30rpx',
      times: null,
      ruls: 1,
      btn_text: '提交按钮',
      after_submit: '提交成功'
    }
  },
  // 分类导航
  sortdata = [
    {
      top: 2400,
      left: 0,
      width: 375,
      height: 44,
      position: 'absolute',
      bgColor: '#fff',
      color: '#666',
      font_size: 14,
      font_weight: 'blod',
      font_style: 'normal',
      text_decration: 'none',
      text_align: 'center',
      rotate: 'rotate(0)',
      opacity: '',
      nav_items: [
        {
          title: '标题一',
          color: 'red',
          border_bottom: '1px solid red',
          click_type: 'share-to',
          skip_path: '123456',
        },
        {
          title: '标题er',
          color: 'red',
          border_bottom: '1px solid red',
          click_type: 'share-to',
          skip_path: '123456',
        },
        {
          title: '标题san',
          color: 'red',
          border_bottom: '1px solid red',
          click_type: 'share-to',
          skip_path: '123456',
        },
        {
          title: '标题si',
          color: 'red',
          border_bottom: '1px solid red',
          click_type: 'share-to',
          skip_path: '123456',
        }
      ]
    },
    {
      top: 2450,
      left: 0,
      width: 375,
      height: 44,
      position: 'absolute',
      bgColor: '#fff',
      color: '#666',
      font_size: 14,
      font_weight: 'blod',
      font_style: 'normal',
      text_decration: 'none',
      text_align: 'center',
      rotate: 'rotate(0)',
      opacity: '',
      nav_items: [
        {
          title: '标题一',
          color: 'red',
          border_bottom: '1px solid red',
          click_type: 'share-to',
          skip_path: '123456',
        },
        {
          title: '标题er',
          color: 'red',
          border_bottom: '1px solid red',
          click_type: 'share-to',
          skip_path: '123456',
        },
        {
          title: '标题san',
          color: 'red',
          border_bottom: '1px solid red',
          click_type: 'share-to',
          skip_path: '123456',
        },
        {
          title: '标题si',
          color: 'red',
          border_bottom: '1px solid red',
          click_type: 'share-to',
          skip_path: '123456',
        }
      ]
    }
  ],
  //左右滑动图
  scrollviewdata = [
    {
      top: 2500,
      left: 0,
      width: 375,
      height: 200,
      position: 'absolute',
      bgColor: '#fff',
      imgW: 100,
      imgH: 130,
      lineHeight: '',
      border: '1px solid red',
      border_radius: '30rpx',
      click_type: 'share-to',
      skip_path: '123456',
      scroll_items: [
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509011810024&di=9f60d955f3b70c1e2c32026bcd9eb9d2&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2FbVzSIZjXuk9xPEr7aqoaDQ%3D%3D%2F1399212109328951163.jpg',
          title1: {
            title: '主标题',
            color: '#a1a',
            font_size: 16,
            font_family: '微软雅黑'
          },
          title2: {
            title: '副标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          introduction: {
            content: '介绍',
            color: '#a3a4a5',
            font_size: '16',
            font_family: '微软雅黑'
          },
          click_type: 'open-map',
          skip_path: '123456',
        }, {
          src: 'http://img15.3lian.com/2015/a1/16/d/205.jpg',
          title1: {
            title: '主标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          title2: {
            title: '副标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          introduction: {
            content: '介绍',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          click_type: 'share-to',
          skip_path: '123456',
        }, {
          src: 'http://img15.3lian.com/2015/h1/280/d/11.jpg',
          title1: {
            title: '主标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          title2: {
            title: '副标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          introduction: {
            content: '介绍',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          click_type: 'share-to',
          skip_path: '123456',
        }, {
          src: 'http://img0.imgtn.bdimg.com/it/u=1637071672,1647023990&fm=27&gp=0.jpg',
          title1: {
            title: '主标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          title2: {
            title: '副标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          introduction: {
            content: '介绍',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          click_type: 'share-to',
          skip_path: '123456',
        }
      ],
    },
    {
      top: 2750,
      left: 0,
      width: 375,
      height: 200,
      position: 'absolute',
      bgColor: '#fff',
      imgW: 100,
      imgH: '130',
      lineHeight: '',
      border: '1px solid red',
      border_radius: '30rpx',
      scroll_items: [
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509011810024&di=9f60d955f3b70c1e2c32026bcd9eb9d2&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2FbVzSIZjXuk9xPEr7aqoaDQ%3D%3D%2F1399212109328951163.jpg',
          title1: {
            title: '主标题',
            color: '#a1a',
            font_size: '16',
            font_family: '微软雅黑'
          },
          title2: {
            title: '副标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          introduction: {
            content: '介绍',
            color: '#a3a4a5',
            font_size: '16',
            font_family: '微软雅黑'
          },
          click_type: 'call-phone',
          skip_path: '123456',
        }, {
          src: 'http://img15.3lian.com/2015/a1/16/d/205.jpg',
          title1: {
            title: '主标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          title2: {
            title: '副标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          introduction: {
            content: '介绍',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          click_type: 'share-to',
          skip_path: '123456',
        }, {
          src: 'http://img15.3lian.com/2015/h1/280/d/11.jpg',
          title1: {
            title: '主标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          title2: {
            title: '副标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          introduction: {
            content: '介绍',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          click_type: 'share-to',
          skip_path: '123456',
        }, {
          src: 'http://img0.imgtn.bdimg.com/it/u=1637071672,1647023990&fm=27&gp=0.jpg',
          title1: {
            title: '主标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          title2: {
            title: '副标题',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          introduction: {
            content: '介绍',
            color: '#a33',
            font_size: '16',
            font_family: '微软雅黑'
          },
          click_type: 'share-to',
          skip_path: '123456',
        }
      ],
    }
  ],
  // 底部导航栏
  navdata = [
    {
      iconname: 'icon-kefu',
      iconColor: '#666',
      title: '客服',
      titleColor: '#666',
      bgColor: '#fff',
      click_type: 'share-to',
      skip_path: '123456'
    },
    {
      iconname: 'icon-kefu',
      iconColor: '#666',
      title: '客服',
      titleColor: '#666',
      bgColor: '#fff',
      click_type: 'share-to',
      skip_path: '123456'
    },
    {
      iconname: 'icon-manager',
      iconColor: '#666',
      title: '管理',
      titleColor: '#666',
      bgColor: '#fff',
      click_type: 'share-to',
      skip_path: '123456'
    }, {
      iconname: 'icon-jilu',
      iconColor: '#666',
      title: '记录',
      titleColor: '#666',
      bgColor: '#fff',
      click_type: 'share-to',
      skip_path: '123456'
    }, {
      iconname: 'icon-manager',
      iconColor: '#666',
      title: '管理',
      titleColor: '#666',
      bgColor: '#fff',
      click_type: 'share-to',
      skip_path: '123456'
    }, {
      iconname: 'icon-jilu',
      iconColor: '#666',
      title: '记录',
      titleColor: '#666',
      bgColor: '#fff',
      click_type: 'share-to',
      skip_path: '123456'
    },
  ],
  //幻灯片
  swiperdata = [
    {
      top: 1700,
      left: 0,
      width: 375,
      height: 200,
      position: 'absolute',
      rotate: 'rotate(0deg)',
      opacity: .8,
      border: '1px solid red',
      border_radius: '30rpx',
      indicator_dots: true,
      indicator_color: 'red',
      indicator_active_color: '#000',
      autoplay: true,
      interval: 1500,
      duration: 1500,
      imgUrls: [
        {
          src: 'http://img15.3lian.com/2015/a1/16/d/205.jpg',
          click_type: 'page-skip',
          skip_path: '../second/second'
        },
        {
          src: 'http://scimg.jb51.net/allimg/150925/14-1509250Z615109.jpg',
          click_type: 'call-phone',
          skip_path: '123456'
        },
        {
          src: 'http://img0.imgtn.bdimg.com/it/u=1637071672,1647023990&fm=27&gp=0.jpg',
          click_type: 'address-skip',
          skip_path: '123456'
        },
        {
          src: 'http://rescdn.qqmail.com/dyimg/20140303/70FA031666D6.jpg',
          click_type: '',
          skip_path: '123456'
        },
        {
          src: 'http://img15.3lian.com/2015/h1/280/d/11.jpg',
          click_type: 'share-to',
          skip_path: '123456'
        }
      ]
    },
  ],
  // 视频  待定
  videodata = [
    {
      top: 3000,
      left: 0,
      width: 375,
      height: 160,
      position: 'absolute',
      bgColor: '#fff',
      opacity: .9,
      rotate: 'rotate(0deg)',
      border: '',
      border_radius: '',
      src: 'https://c.weimobwmc.com/saas-wxbiz/c7f82500070d4aa99fedf1f7f42c850f.mp4',
      poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509011810024&di=9f60d955f3b70c1e2c32026bcd9eb9d2&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2FbVzSIZjXuk9xPEr7aqoaDQ%3D%3D%2F1399212109328951163.jpg',
      autoplay: false,
      loop: false,
    },
  ],
  // 图标  待定
  iconfontdata = [
    {
      width: 100,
      height: 100,
      left: 10,
      top: 400,
      bgColor: '#000',
      color: '#aaa',
      border: '1px solid red',
      position: 'absolute',
      rotate: 'rotate(0)',
      opacity: .5,
      border_radius: 30,
      icon_name: 'icon-kefu',
      click_type: 'call-phone',
      skip_path: '1234567898',
    },
    {
      width: 50,
      height: 50,
      left: 120,
      top: 400,
      bgColor: '#000',
      color: '#aaa',
      border: '1px solid red',
      position: 'absolute',
      rotate: 'rotate(0)',
      opacity: .5,
      border_radius: 30,
      icon_name: 'icon-kefu',
      click_type: 'call-phone',
      skip_path: '1234567898',
    },
  ],
  // 地图  待定
  mapdata = [
    {
      id: 'myMap',
      top:3500,
      left:0,
      width:375,
      height:200,
      position:'absolute',
      bgColor:'#fff',
      font_size:16,
      rotate:'rotate(0deg)',
      opacity:.9,
      border: '1px solid red',
      border_radius: 30,
      click_type: 'call-phone',
      skip_path: '1234567898',
      longitude: '113.66642',
      latitude: '34.809154',
    }
  ],
  form = JSON.stringify(formdata),
  nav = JSON.stringify(navdata),
  swiper = JSON.stringify(swiperdata),
  scroll = JSON.stringify(scrollviewdata),
  sort = JSON.stringify(sortdata),
  imgurl = JSON.stringify(img),
  // 视频  待定
  // video = JSON.stringify(videodata),
  // 图标  待定
  icon = JSON.stringify(iconfontdata),
  //地图  待定
  // map = JSON.stringify(mapdata),
  textdata = JSON.stringify(text);
const app = getApp()
Page({
  data: {
    clickid: 0,
    index: 0,
  },
  onLoad: function () {
    var userInfo = wx.getStorageSync('user_wxa');
    if (userInfo) {
      this.setData({
        userInfo: userInfo
      })
      this.requestData();
    } else {
      app.wx_login()
    }
  },
  // 请求数据
  requestData: function () {
    var that = this;
    wx.request({
      url: 'https://baas.qingful.com/1.0/class/api/table/pages',
      // method:'get',
      method: 'post',
      data: {
        id: 1,
        img: imgurl,
        text: textdata,
        name: name,
        form: form,
        sort: sort,
        scroll: scroll,
        nav: nav,
        swiper: swiper,
        icon:icon,
        wxa_id:3,
        user_id: 65257,
        custom_id:1
        // video:video,
        //map:map
      },
      // data:{},


      header: {                                                                    
        'content-type': 'application/json',
        "x-qingful-appid": '957376595583',
        "x-qingful-appkey": 'MfDapOmyptlLyxcDEQROGLgE',
        "Authorization": wx.getStorageSync('Authorization')
      },
      success: function (res) {
        var imgs = JSON.parse(res.data.data.img);
        var texts = JSON.parse(res.data.data.text);
        var name = res.data.data.name;
        var form = JSON.parse(res.data.data.form);
        var scroll = JSON.parse(res.data.data.scroll);
        var nav = JSON.parse(res.data.data.nav);
        var swiper = JSON.parse(res.data.data.swiper);
        var sort = JSON.parse(res.data.data.sort);
        var icon = JSON.parse(res.data.data.icon);
        // var video = JSON.parse(res.data.data.video);
        // var map = JSON.parse(res.data.data.video);
        // 分类导航默认样式设置
        for (let i = 0; i < sort.length; i++) {
          sort[i].id = i;
          var navItems = sort[i].nav_items;
          for (let o = 0; o < navItems.length; o++) {
            navItems[0].clickid = 0;
          }
        };
        //图标字体计算
        for (let k = 0; k < icon.length; k++) {
          icon[k].font_size = Math.sqrt(icon[k].width * icon[k].height)
        };
        that.setData({
          imgs: imgs,
          texts: texts,
          name: name,
          form: form,
          sort: sort,
          scroll: scroll,
          nav: nav,
          swiper:swiper,
          icon:icon,
          //map:map,
          // video:video
        })
        wx.setNavigationBarTitle({
          title: name,
        })
      }
    })
  },
  onClick: function (e) {
    var that = this;
    var click_type = e.currentTarget.dataset.click;
    var skip_path = e.currentTarget.dataset.skippath;
    var index = e.currentTarget.dataset.index;
    var id = e.currentTarget.dataset.id;
    // 处理分类导航点击样式
    var sort = this.data.sort;
    for (let i = 0; i < sort.length; i++) {
      if (sort[i].id == id) {
        var navItems = sort[i].nav_items;
        for (let o = 0; o < navItems.length; o++) {
          navItems[o].clickid = '';
          if (o == index) {
            navItems[o].clickid = index;
          }
        }
      };
    }
    this.setData({
      sort: sort
    })
    if (click_type == '') {
      wx.showModal({
        title: '当前点击未设置事件',
      })
      return false
    } else if (click_type == 'page-skip') {
      wx.navigateTo({
        url: skip_path,
      })
    } else if (click_type == 'open-map') {
      wx.showModal({
        title: '打开地图',
        content: '',
      })
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
    this.data.form.region[index].region = region;
    this.setData({
      form: this.data.form
    })
  },
  // 年月日
  chooseDate: function (e) {
    var date = e.detail.value.split('-');
    var index = e.currentTarget.dataset.index;
    this.data.form.date[index].date = date;
    this.setData({
      form: this.data.form
    })
  },
  // 时间
  chooseTime: function (e) {
    var time = e.detail.value.split(':');
    var index = e.currentTarget.dataset.index;
    this.data.form.time[index].time = time;
    this.setData({
      form: this.data.form
    })
  },
  // 表单提交
  formSubmit: function (e) {
    console.log(e)
  },
  // 分享设置

})
