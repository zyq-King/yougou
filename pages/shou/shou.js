// pages/shou/shou.js
import{request} from "../../request/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    catesList:[],
    floorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //轮播图的请求
    // wx-wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     this.setData({
    //       swiperList:result.data.message
    //     })
        
    //   }
    // })

    // 封装过后的请求
    // request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
    // .then(result => {
    //   this.setData({
    //           swiperList:result.data.message
    //         })
    // })
    this.getSwiperList(),
    this.getCatesList(),
    this.getFloorList()
  },

  // 分类数据
  getCatesList(){
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'})
    .then(result => {
      this.setData({
        catesList:result.data.message
            })
    })
  },
// 获取轮播图数据的函数块
  getSwiperList(){
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
    .then(result => {
      this.setData({
              swiperList:result.data.message
            })
    })
  },
  // 获取楼层数据的函数块
  getFloorList(){
    request({ url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'})
    .then(result => {
      this.setData({
              floorList:result.data.message
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