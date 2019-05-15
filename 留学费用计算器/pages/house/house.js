// pages/country/country.js
var myJson = require('../Json/Json.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array1: myJson.allArray,
    index1: -1,
    array1Tip: myJson.jsonArray[0].tip,
    array2: myJson.education,
    index2: -1,
    array2Tip: myJson.jsonArray[1].tip,
    screenHeight: 750 / wx.getSystemInfoSync().windowWidth * wx.getSystemInfoSync().windowHeight,
    index:0,
    jsonArray: myJson.jsonArray,
  },
  onLoad: function () {
  },
  next: function () {
    var that = this;
    var index1 = that.data.index1;
    var index2 = that.data.index2;
    if(index1==-1||index2==-1){
      wx.showModal({
        title: '提示',
        content: index1==-1?"请选择意向城市":"请选择学历",
        success(res) {
          return;
        }
      })
    }else{
      var cityItem = that.data.array1[that.data.index1];
      var allMoney = cityItem.education[that.data.index2].money;
      wx.setStorageSync('cityItem', cityItem)
      wx.setStorageSync('allMoney', allMoney)
      wx.navigateTo({
        url: '../country/country'
      })
    }
  },
  chang1:function(e){
    this.setData({
      index1: e.detail.value
    })
  },
  chang2: function (e) {
    this.setData({
      index2: e.detail.value
    })
  }
})