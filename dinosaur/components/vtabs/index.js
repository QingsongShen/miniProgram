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
      type: "child",
      linked: function(target){
        let _this = this
        target.calcHeight(function (rect) {
          _this.data._contentHeight[target.data.tabIndex] = rect.height;
          if (_this._calcHeightTimer) {
              clearTimeout(_this._calcHeightTimer);
          }
          _this._calcHeightTimer = setTimeout(function () {
              _this.calcHeight();
          }, 100);
      });
      },
      unlinked: function unlinked(target) {
        delete this.data._contentHeight[target.data.tabIndex];
    }
    } 
  },
  observers: {
    activeTab: function(_activeTab){
      this.scrollTabBar(_activeTab)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 计算右侧item分类框高度
    calcHeight: function(){
      let length = this.data.vtabs.length;
      let _contentHeight = this.data._contentHeight;
      let _heightRecords = [];
      let temp = 0;
      for(let i = 0; i < length; i++){
        _heightRecords[i] = temp + (_contentHeight[i] || 0);
        temp = _heightRecords[i]
      }
      this.data._heightRecords = _heightRecords;
    },
    // 左侧导航栏分类点击函数
    handleTabClick: function(e){
      var _heightRecords = this.data._heightRecords;
      var index = e.currentTarget.dataset.index;
      var contentScrollTop = _heightRecords[index - 1] || 0;
      this.triggerEvent('tabclick', { index: index });
      this.setData({
          activeTab: index,
          contentScrollTop: contentScrollTop
      });
    },

    scrollTabBar: function(index){
      let len = this.data.vtabs.length;
      if (len === 0) return;
      let currentView = index < 6 ? 0 : index - 5;
      if (currentView >= len) currentView = len - 1;
      this.setData({
        currentView: currentView
      })
    },
    handleContentScroll: function handleContentScroll(e) {
      var _heightRecords = this.data._heightRecords;
      if (_heightRecords.length === 0) return;
      var length = this.data.vtabs.length;
      var scrollTop = e.detail.scrollTop;
      var index = 0;
      if (scrollTop >= _heightRecords[0]) {
          for (var i = 1; i < length; i++) {
              if (scrollTop >= _heightRecords[i - 1] && scrollTop < _heightRecords[i]) {
                  index = i;
                  break;
              }
          }
      }
      if (index !== this.data.activeTab) {
          this.triggerEvent('change', { index: index });
          this.setData({ activeTab: index });
      }
    }
  }
})
