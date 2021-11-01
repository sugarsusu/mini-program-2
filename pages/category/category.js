import { request } from "../../request/index"

// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //左侧的菜单数据
    leftMenuList: [],
    // 右侧的数据
    rightContent:[],
    // 接口数据
    cates: []
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCates()
  },

  getCates() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories'
    })
      .then(res => {
        console.log(res)
        this.cates = res.data.message

        // 构造左侧菜单分类数据
        let leftMenuList = this.cates.map(v=>v.cat_name)
        this.setData({
          leftMenuList
        })
  
      })
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

  }
})