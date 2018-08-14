var app = new getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Content:[
    ],
    inforList:[
    ],
    tabs:[
      { title: "全部"},
      { title: "亲子"},
      { title: "户外"},
      { title: "夏令营"}
    ],
    activityinprocess:{},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var host = "https://easy-mock.com/mock/5b72816677e37d07a4181f9b/wechat/home";
    var that = this;
    //获取进行中的活动
    wx.request({
      url: host +'/activity-inprocess',
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        console.log(res.data);
        that.setData({
          activityinprocess:res.data
        })
      }
    });
  //获得活动列表
  wx.request({
    url: host +'/tabs',
    header:{
      'content-type': 'application/json'
    },
    success:function(res){
      that.setData({
        tabs:res.data.tabs
      })
      console.log(res.data);
    }
  });
  //获得消息通知
  wx.request({
    url: host + '/info',
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      that.setData({
        inforList: res.data.inforList
      })
      console.log(res.data);
    }
  });
  //获得轮播内容
  wx.request({
    url: host+'/content',
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      that.setData({
        Content: res.data.Content
      })
      console.log(res.data);
    }
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  onClick: function (e) {
  }
})
