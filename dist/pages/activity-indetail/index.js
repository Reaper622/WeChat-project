var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:'/images/activity-indetail/top.png',
      title:'奇趣小手艺 浓浓亲子情',
      cost:'免费', 
      time:'2018.10.01 -2018.10.05  14:00 —— 15:00',
      address:'石桥辅正街99号红糟房',
      content:'本活动要求参与者身体健康；参与活动前充分准备，没有不适合参加剧烈活动的疾病美丽如但不限于下列疾病：\n \n  (1) 先天性心脏病和风湿性心脏病患者;\n(2)高血压和脑血管疾病患者;\n(3)心肌炎和其他心脏病患者;\n 如遇台风，雷雨天气，活动将取消。 ',
      publisher:{
        url:'/images/activity-indetail/publisher.png',
        name:'周周周',
        phoneNumber:'13123548568'
      },
      people:[
        { id: 0, url: '/images/activity-indetail/people1.png', name: '蜡笔小' },
        { id: 1, url: '/images/activity-indetail/people2.png', name: '小蜡笔' },
        { id: 2, url: '/images/activity-indetail/people3.png', name: '庞天' },
        { id: 3, url: '/images/activity-indetail/people4.png', name: '小智' },
        { id: 4, url: '/images/activity-indetail/people5.png', name: '郑尧' }
      ],
      album:[
        { id: 0,  url: '/images/activity-indetail/pic1.png', name: '杨杨' },
        { id: 1,  url: '/images/activity-indetail/pic2.png', name: '王大贵' },
        { id: 2,  url: '/images/activity-indetail/pic3.png', name: '川川' }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
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
  //查看参与人
  checkPeople:function(e){
    wx.redirectTo({
      url: '/pages/signup-people/index',
    })
  }
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLRUEsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImluZGV4Lnd4cCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnOiB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WQr+WKqOmhtScsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7fVxuICB9LFxuICBkYXRhOiB7fVxufSJdfQ==