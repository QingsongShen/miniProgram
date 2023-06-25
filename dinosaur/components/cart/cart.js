// components/cart/cart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cart: {
      type: Object,
      value: ''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isPopupVisible: false      // 弹出层控制
  },

  /**
   * 组件的方法列表
   */
  methods: {
    submitDish(){
      wx.showModal({
        title: '本店目前不支持线上支付，请联系小恐龙处理订单~',
      })
    },

    // 处理弹出层
    showPopup() {
      this.setData({ isPopupVisible: true });
    },
    onClose() {
      this.setData({ isPopupVisible: false });
    },
    hidePopup(){
      this.setData({ isPopupVisible: false });
    }

  }
})
