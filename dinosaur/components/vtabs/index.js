// components/vtabs/index.js
Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true,
    pureDataPattern: /^_/

  },
  /**
   * 组件的属性列表
   */
  properties: {
    vtabs: { type: Array, value: [] },
    tabBarClass: { type: String, value: '' },
    activeClass: { type: String, value: '' },
    tabBarLineColor: { type: String, value: '#ff0000' },
    tabBarInactiveTextColor: { type: String, value: '#000000' },
    tabBarActiveTextColor: { type: String, value: '#ff0000' },
    tabBarInactiveBgColor: { type: String, value: '#eeeeee' },
    tabBarActiveBgColor: { type: String, value: '#ffffff' },
    activeTab: { type: Number, value: 0 },
    animation: { type: Boolean, value: true }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentView: 0,
    contentScrollTop: 0,
    _heightRecords: [],
    _contentHeight: {}
  },
  relations: {
    "../vtabs-content/index": {
      type: "child"
    } 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 左侧导航栏分类点击函数
    handleTabClick: function(){
      
    }
  }
})
