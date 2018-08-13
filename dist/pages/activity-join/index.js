Page({
  data: {
    activities: [
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
        url: '/images/activity/activity3.png',
        title: '大型亲子活动',
        time: '2018.10.01 - 2018.10.05',
        address: '石桥辅正街 99 号红糟房',
        number: '34'
      }
    ]
  },
  //进入详情页面
  redirect:function(e){
    wx.redirectTo({
      url: '/pages/activity-indetail/index',
    })
  }
});