// pages/home/home.js
import { request } from "../../request/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数组
    swiperList: [],
    cateList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 进入页面即刻加载
    // 1 发送异步请求获取轮播图
    // 注意异步请求回调地狱  优化：可以使用es6的 promise
    
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   header: {'content-type':'application/json'},
    //   method: 'GET',
    //   dataType: 'json',
    //   //返回数据默认形式
    //   // responseType: 'text',
    //   success: (result) => {
    //     this.setData({
    //       swiperList: result.data.message
    //     })
    //     console.log('result',result)
    //   },
    //   fail: () => {},
    //   // 成功或者失败均会调用的函数
    //   complete: () => {}
    // });
    this.getSwiperList()
    this.getCateList()
  },

  // 获取轮播图数据
  getSwiperList(){
    // 封装promise
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    })
      .then(result => {
        this.setData({
          swiperList: result.data.message
        })
      })
  },
  // 获取 分类导航菜单数据
  getCateList(){
    // 封装promise
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'
    })
      .then(result => {
        this.setData({
          cateList: result.data.message
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