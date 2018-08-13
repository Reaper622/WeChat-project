var app = new getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Content:[
      { id: 0, src: '/images/home/course1.png', title: '免费试听课', words: '五周年感恩活动，全网免费试听' },
      { id: 1, src: '/images/home/course2.png', title: '免费试听课', words: '五周年感恩活动，全网免费试听' },
      { id: 2, src: '/images/home/course3.png', title: '免费试听课', words: '五周年感恩活动，全网免费试听' },
      { id: 3, src: '/images/home/course4.png', title: '免费试听课', words: '五周年感恩活动，全网免费试听' },
    ],
    inforList:[
      { id:0, content: '你报名的 "携手合众 你我共赢" 已经开始了！' },
      { id:1,content: '该小程序为测试版本！' },
      { id:2,content: 'programmer：ReaperLee！' }
    ],
    tabs: [
      {
        title: '全部', activities: [
          {
            url: '/images/activity/activity.png',
            title: '奇趣小手艺 浓浓亲子情',
            time: '2018.10.01 - 2018.10.05',
            address: '石桥辅正街 99 号红糟房',
            number: '24'
          },
          {
            url: '/images/activity/activity2.png',
            title: '携手合众 你我共赢',
            time: '2018.10.01 - 2018.10.05',
            address: '石桥辅正街 99 号红糟房',
            number: '34'
          },
          {
            url: '/images/activity/activity2.png',
            title: '携手合众 你我共赢',
            time: '2018.10.01 - 2018.10.05',
            address: '石桥辅正街 99 号红糟房',
            number: '54'
          }
        ]},
      {
        title: '亲子', activities: [
          {
            url: '/images/activity/activity.png',
            title: '奇趣小手艺 浓浓亲子情',
            time: '2018.10.01 - 2018.10.05',
            address: '石桥辅正街 99 号红糟房',
            number: '24'
          },
          {
            url: '/images/activity/activity2.png',
            title: '携手合众 你我共赢',
            time: '2018.10.01 - 2018.10.05',
            address: '石桥辅正街 99 号红糟房',
            number: '34'
          }
        ]},
      {
        title: '户外', activities: [

          {
            url: '/images/activity/activity2.png',
            title: '携手合众 你我共赢',
            time: '2018.10.01 - 2018.10.05',
            address: '石桥辅正街 99 号红糟房',
            number: '34'
          }
        ]},
      {
        title: '夏令营', activities: [
          {
            url: '/images/activity/activity2.png',
            title: '携手合众 你我共赢',
            time: '2018.10.01 - 2018.10.05',
            address: '石桥辅正街 99 号红糟房',
            number: '34'
          }
        ]}
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
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

  onClick: function (e) {
  }
})
