
import{request} from "../../request/index"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧菜单的
    liftMenuList:[],
    // 右侧菜单的
    rightContent:[],
    // 被点击的左边的菜单
    currentIndex:0,
    // 右侧的滚动条距离顶部的距离
    scrollTop:0
  },
  // 接口数据
  Cates:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
// 数据缓存技术
// 1.获取本地存储中的数据
    const Cates = wx.getStorageSync('cates');
    // 2.判断是否存在
    if(!Cates){
      // 不存在就请求
      this.getCates()
    }else{
      // 有旧数据的时候定义过期的时间
      if(Date.now()-Cates.time>1000*10){
        // 超过了时间就重新发送请求
        this.getCates()
      }else{
        // 使用旧数据
        this.Cates = Cates.data;
        let liftMenuList=this.Cates.map(v=>v.cat_name);
        let rightContent=this.Cates[0].children;
        this.setData({
          liftMenuList,
          rightContent
       })
      // console.log("使用旧数据")
      }
    }

   
  },
// 获取分类数据
  getCates(){
    request({
      url:'https://api-hmugo-web.itheima.net/api/public/v1/categories'
    })
    .then(res=>{
      this.Cates=res.data.message;

      // 把接口的数据存储到本地存储中
      wx.setStorageSync('cates', {time:Date.now(),data:this.Cates})

      // 遍历数组map，根据cat_name查询
      let liftMenuList=this.Cates.map(v=>v.cat_name);
      let rightContent=this.Cates[0].children
      this.setData({
        liftMenuList,
        rightContent
      })
    })
  },
  // 左侧菜单的点击事件
  handleItemTab(e){
    // 拿到点击标题的索引
    const {index} = e.currentTarget.dataset;
// 根据不同的索引渲染
    let rightContent=this.Cates[index].children
    // 给数据中的currentIndex赋值
    this.setData({
      currentIndex:index,
      rightContent,
      // 右侧顶部的距离
      scrollTop:0
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