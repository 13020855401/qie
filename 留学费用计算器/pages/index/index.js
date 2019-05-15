//index.js
//获取应用实例
var myJson = require('../Json/Json.js');
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    screenHeight: 750 / wx.getSystemInfoSync().windowWidth * wx.getSystemInfoSync().windowHeight,
    arrayCountry: myJson.AllArray,
    arrayEducation:myJson.education,
    countryIndex:0,
    educationIndex: 0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  next:function(){
    console.log(11111)
    wx.navigateTo({
      url: '../house/house'
    })
  },
  bindPickerChange(e) {
    this.setData({
      countryIndex: e.detail.value
    })
    var item = that.data.arrayCountry[e.detail.value];

    wx.setStorageSync('item', item)
  },
  bindPickerChangeEducation(e) {
    this.setData({
      educationIndex: e.detail.value
    })
  },
})
