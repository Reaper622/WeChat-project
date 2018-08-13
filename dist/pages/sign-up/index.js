Page({
  data: {
    username:'',
    phoneNumber:'',
    adultNumber:'',
    kidsNumber:''
  },
  usernameInput:function(e){
    this.data.username = e.detail.value;
  },
  phoneNumberInput:function(e){
    this.data.phoneNumber = e.detail.value;
  },
  adultNumberInput:function(e){
    this.data.adultNumber = e.detail.value;
  },
  kidsNumberInput:function(e){
    this.data.kidsNumber = e.detail.value;
  },
  //验证电话号码
  checkPhone: function () {
    var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (this.data.phoneNumber.length == 0) {
      wx.showToast({
        title: '输入的手机号为空',
        icon: 'loading',
        duration: 1500
      })
      return false;
    } else if (this.data.phoneNumber.length < 11) {
      wx.showToast({
        title: '手机号长度有误！',
        icon: 'loading',
        duration: 1500
      })
      return false;
    } else if (!reg.test(this.data.phoneNumber)) {
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
  submitIt:function(e){
    this.checkPhone();
    let _username = this.data.username;
    let _phoneNumber = this.data.phoneNumber;
    let _adultNumber = this.data.adultNumber;
    let _kidsNumber = this.data.kidsNumber;
    let that = this;
    console.log(that.data);
    wx.redirectTo({
      url: '/pages/activity-indetail/index',
    })
  }

});