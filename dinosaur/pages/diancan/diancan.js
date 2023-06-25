// pages/diancan/diancan.js
// 引入存储模块
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/dishOrder'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopTitle: "小恐龙家常菜",
    notices: {
      events: {
        logoPath:[
          "./img/jian.svg"
        ],
        contents:[
          "25减2",
          "38减3"
        ]
      }, 
      notice: [
        "欢迎光临小恐龙美食铺，很高兴为您服务！",
        "本店仅支持张雪纯下单使用，其他人恕不接待~",
        "本店支持床头投喂功能~"
      ]
    },
    isOpen: false  // 定义通知栏是否打开
    
  },

  // 处理通知栏下拉
  toggleNotice(){
    this.setData({
      isOpen: !this.data.isOpen
    })

    if(!this.data.isOpen) {
      
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 加载store
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['vtabs','cart'],
      actions: ['addSelect', 'substractSelect']
    })

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
    // 卸载store
    this.storeBindings.destroyStoreBindings()
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