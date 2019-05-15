// pages/country/country.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['自己做饭', '食堂','中餐厅'],
    objectArray: [
      {
        id: 0,
        name: '自己做饭',
        min_money: 2,
        max_money: 5,
      },
      {
        id: 1,
        name: '食堂',
        min_money: 3,
        max_money: 6,
      },
      {
        id: 2,
        name: '中餐厅',
        min_money: 4,
        max_money: 7,
      }
    ],
    index:"",
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
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
    var array = wx.getStorageSync('array');
    array.push('expenditure');
    var obj = this.data.objectArray[e.detail.value];
    obj.text = "日常消费"
    wx.setStorageSync('expenditure', obj)
    wx.setStorageSync('array', array)
  },
  next: function () {
    wx.navigateTo({
      url: '../gohome/gohome'
    })
  }
})