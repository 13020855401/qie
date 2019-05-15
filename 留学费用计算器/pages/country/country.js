// pages/country/country.js
var myJson = require('../Json/Json.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    optionArray: [],
    optionIndex: -1,
    screenHeight: 750 / wx.getSystemInfoSync().windowWidth * wx.getSystemInfoSync().windowHeight,
    index: 2,
    jsonArray: myJson.jsonArray,
    arrayType:"",
    allMoney:0,
    cityItem:{},
    selectedMoney:0,
    selectedpercentage:0
  },
  onLoad: function () {
    var that = this;
    var cityItem = wx.getStorageSync('cityItem')
    var allMoney = wx.getStorageSync('allMoney')
    var index = that.data.index;
    var jsonArray = that.data.jsonArray;
    that.setData({
      optionArray: cityItem[jsonArray[index].value],
      arrayType:jsonArray[index].value,
      optionIndex: -1,
      tip: jsonArray[index].tip,
      allMoney:allMoney,
      cityItem:cityItem,
    })
  },
  next: function () {
    var that = this;
    var optionIndex = that.data.optionIndex;
    var index = that.data.index;
    var jsonArray = that.data.jsonArray;
    var cityItem = that.data.cityItem;
    var allMoney = that.data.allMoney;
    var test = true;
    if(jsonArray[index].value == 'shoppingConcept'){
      if(optionIndex==-1){
        wx.showModal({
          title: '提示',
          content: that.data.tip,
          success(res) {
            if (res.confirm) {
              dietArray[index].days = 0;
              dietArray[index==0?1:0].days = 300;
              cityItem.diet = dietArray;
              that.setData({
                optionArray:dietArray,
                cityItem:cityItem
              })
            }
            return;
          }
        })
        test = false;
      }else{
        allMoney = allMoney*that.data.selectedpercentage
      }
    }else if(jsonArray[index].value == 'diet'){
      var dietArray = cityItem.diet;
      if (dietArray[0].days === "" || dietArray[1].days === ""){
        wx.showModal({
          title: '提示',
          content: '请先输入天数',
          success(res) {
            if (res.confirm) {
              dietArray[index].days = 0;
              dietArray[index==0?1:0].days = 300;
              cityItem.diet = dietArray;
              that.setData({
                optionArray:dietArray,
                cityItem:cityItem
              })
            }
            return;
          }
        })
        test = false;
      } else if (dietArray[0].days < 0 || dietArray[1].days<0){
        wx.showModal({
          title: '提示',
          content: '请输入正确的天数',
          success(res) {
            if (res.confirm) {
              dietArray[index].days = 0;
              dietArray[index==0?1:0].days = 300;
              cityItem.diet = dietArray;
              that.setData({
                optionArray:dietArray,
                cityItem:cityItem
              })
            }
            return;
          }
        })
        test = false;
      }else{
        allMoney += dietArray[0].days *dietArray[0].money + dietArray[1].days *dietArray[1].money; 
      }
    }else{
      if(optionIndex==-1){
        wx.showModal({
          title: '提示',
          content: that.data.tip,
          success(res) {
            return;
          }
        })
        test = false;
      }else{
        allMoney += that.data.selectedMoney;
      }
    }
    if(test){
      if (index < jsonArray.length-1) {
        debugger
        index = that.data.index+1;
        that.setData({
          optionArray: cityItem[jsonArray[index].value],
          optionIndex: -1,
          tip: jsonArray[index].tip,
          index: index,
          allMoney:allMoney,
          arrayType:jsonArray[index].value,
        })
      } else {
        wx.setStorageSync('cityItem', cityItem)
        wx.setStorageSync('allMoney', allMoney)
        wx.navigateTo({
          url: '../finally/finally'
        })
      }
    }
  },
  chooseOption: function (e) {
    if(this.data.arrayType == 'diet'){
      return;
    }
    this.setData({
      optionIndex : e.currentTarget.dataset.index,
      selectedMoney: e.currentTarget.dataset.money ? e.currentTarget.dataset.money:0,
      selectedpercentage: e.currentTarget.dataset.percentage ? e.currentTarget.dataset.percentage:0,
    })
  },
  inputDays:function(e){
    var that = this;
    var days = e.detail.value;
    var index = e.currentTarget.dataset.index;
    var cityItem = that.data.cityItem;
    var dietArray = that.data.optionArray;
    if(days>300){
      wx.showModal({
        title: '提示',
        content: '天数不能超过300天',
        success(res) {
          if (res.confirm) {
            dietArray[index].days = 0;
            dietArray[index==0?1:0].days = 300;
            cityItem.diet = dietArray;
            that.setData({
              optionArray:dietArray,
              cityItem:cityItem
            })
          }
          return;
        }
      })
    }else{
      dietArray[index].days = days;
      dietArray[index==0?1:0].days = 300 - parseInt(days);
      cityItem.diet = dietArray;
      that.setData({
        optionArray:dietArray,
        cityItem:cityItem
      })
    }
  }
})