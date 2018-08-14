Page({
  data: {
    activities:[]
  },
  //进入详情页面
  onLoad:function(){
    var that = this;
    //获取列表
    wx.request({
      url: 'https://easy-mock.com/mock/5b72816677e37d07a4181f9b/wechat/activity-join/main',
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
  redirect:function(e){
    wx.redirectTo({
      url: '/pages/activity-indetail/index',
    })
  }
});