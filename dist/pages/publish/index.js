var app = new getApp();
Page({
  data:{
    activityTitle:'',
    activityNumber:0,
    activityTime:'',
    activityAddress:'',
    activityCost:'',
    activityInfo:'',
    activityPublisher:'',
    activityPhone:''
  },
  //获取活动标题
  titleInput:function(e){
    this.setData({
      activityTitle: e.detail.value
    });
  },
  //获取活动人数
  numberInput: function (e) {
    this.setData({
      activityNumber: e.detail.value
    });
  },
  //获取活动时间
  timeInput: function (e) {
    this.setData({
      activityTime: e.detail.value
    });
  },
  //获取活动地址
  addressInput: function (e) {
    this.setData({
      activityAddress: e.detail.value
    });
  },
  //获取活动费用
  costInput: function (e) {
    this.setData({
      activityCost: e.detail.value
    });
  },
  //获取活动详情
  infoInput: function (e) {
    this.setData({
      activityInfo: e.detail.value
    });
  },
  //获取活动发布人
  publisherInput: function (e) {
    this.setData({
      activityPublisher: e.detail.value
    });
  },
  //获取活动电话
  phoneInput: function (e) {
    this.setData({
      activityPhone: e.detail.value
    });
  },
  //验证电话号码
  checkPhone:function(){
    var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (this.data.activityPhone.length == 0) {
      wx.showToast({
        title: '输入的手机号为空',
        icon: 'loading',
        duration: 1500
      })
      return false;
    } else if (this.data.activityPhone.length < 11) {
      wx.showToast({
        title: '手机号长度有误！',
        icon: 'loading',
        duration: 1500
      })
      return false;
    } else if (!reg.test(this.data.activityPhone)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'loading',
        duration: 1500
      })
      return false;
    } else {
      wx.showToast({
        title: '填写正确',
        icon: 'success',
        duration: 1500
      })

    }
  },

  show:function(e){
    wx.showToast({
      title: '上传成功',
      icon: 'success',
      duration: 1500
    });
    wx.redirectTo({
      url: '/pages/publishPage/index',
      success:function(e){
        console.log('redirect')
      }
    })
  }
  
  

})