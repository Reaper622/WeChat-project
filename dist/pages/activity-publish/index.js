// pages/activity-publish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activities: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取发布活动列表
    wx.request({
      url: 'https://easy-mock.com/mock/5b72816677e37d07a4181f9b/wechat/activity-publish/main',
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        that.setData({
          activities:res.data.activities
        })
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
  //进入详情页面
  redirect:function(e){
    wx.redirectTo({
      url: '/pages/activity-indetail/index',
    })
  }
})