// components/vtabs-content/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },
  properties: {
    tabIndex: {
      type: Number,
      value: 0
    },
  },  
  relations: {
    '../vtabs/index': {
      type: 'parent'
    }
  },
  lifetimes: {
    attached: function(){}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    calcHeight: function calcHeight(callback) {
      var query = this.createSelectorQuery();
      query.select('.vtabs-content__item').boundingClientRect(function (rect) {
          callback && callback(rect);
      }).exec();
  }
  }
})
