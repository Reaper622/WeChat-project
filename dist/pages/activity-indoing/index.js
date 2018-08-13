// pages/activity-indoing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activities: [
      {
        id:0,
        url: '/images/activity/activity.png',
        title: '奇趣小手艺 浓浓亲子情',
        time: '2018.10.01 - 2018.10.05',
        address: '石桥辅正街 99 号红糟房',
        number: '24',
        istapped:true,
        pics:[
          '/images/activity-indetail/pic1.png',
          '/images/activity-indetail/pic2.png'
        ]
      },
      {
        id:1,
        url: '/images/activity/activity2.png',
        title: '携手合众 你我共赢',
        time: '2018.10.01 - 2018.10.05',
        address: '石桥辅正街 99 号红糟房',
        number: '34',
        istapped:false,
        pics: [
          '/images/activity-indetail/pic1.png',
          '/images/activity-indetail/pic2.png'
        ]
      },
      {
        id:2,
        url: '/images/activity/activity3.png',
        title: '大型亲子活动',
        time: '2018.10.01 - 2018.10.05',
        address: '石桥辅正街 99 号红糟房',
        number: '34',
        istapped:false,
        pics: [
          '/images/activity-indetail/pic1.png',
          '/images/activity-indetail/pic2.png'
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  //点击活动事件
  tapactivity: function (e) {
    var index = e.currentTarget.dataset.index;
    var it = "activities["+ index +"].istapped";
    var value = true;
    if(this.data.activities[index].istapped){
      value = false;
    }
    this.setData({
      [it]:value
    })
  },
  //签到事件
  checkIn:function(e){
    wx.showToast({
      title: '签到成功',
      icon:'success',
      duration:2000
    }),
    setTimeout(function(){
      wx.redirectTo({
        url: '/pages/check-in/index',
      })
    },3000)
  },
  //上传事件
  upload:function(e){
    wx.showToast({
      title: '敬请期待',
      icon:'loading'
    })
  }
})