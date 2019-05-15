// pages/country/country.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['必须才买', '喜欢就买'],
    objectArray: [
      {
        id: 0,
        name: '必须才买',
        min_money: 2,
        max_money: 5,
      },
      {
        id: 1,
        name: '喜欢就买',
        min_money: 4,
        max_money: 6,
      }
    ],
    index: "",
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
    array.push('shoping');
    var obj = this.data.objectArray[e.detail.value];
    obj.text = "购物理念"
    wx.setStorageSync('shoping',obj)
    wx.setStorageSync('array', array)
  },
  next: function () {
    wx.navigateTo({
      url: '../finally/finally'
    })
  }
})