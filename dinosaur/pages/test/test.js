// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vtabs: [],
    activeTab: 0
  },

  /**   
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const titles = ['热搜推荐', '手机数码', '家用电器',
      '生鲜果蔬', '酒水饮料', '生活美食', 
      '美妆护肤', '个护清洁', '女装内衣', 
      '男装内衣', '鞋靴箱包', '运动户外', 
      '生活充值', '母婴童装', '玩具乐器', 
      '家居建材', '计生情趣', '医药保健', 
      '时尚钟表', '珠宝饰品', '礼品鲜花', 
      '图书音像', '房产', '电脑办公']
    const vtabs = titles.map(item => ({title: item}))
    this.setData({vtabs})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})