// pages/faxian/faxian.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
    height:91,
    widHeight:0,
    currentTab: 1,
    newslist: [],
    per_info: [],
    curring:-1, 
    detail: [
        // 题目
      {
        id: '1', 
        title: '内河船舶船长（ ）及以上的船舶，应计算船体中剖面模数以校核其总纵强度。',
        answer:'2',
        array: [
            { name: '40m', usname: false },
            { name: '50m', usname: false },
            { name: '60m', usname: false }, 
            { name: '65m', usname: false },
        ]
      },
      {
        id: '2', 
        title: '强力甲板的开口观度应不大于（ ）B。', 
        answer: '1', 
        array: [
            { name: '0.8', usname: false }, 
            { name: '0.7', usname: false },
            { name: '0.5', usname: false }, 
            { name: '0.6', usname: false },
        ]
      },
      {
        id: '3', 
        title: '“内河钢船建造规范”规定，载重量（ ）T及以上油驳的货油舱区应采用双壳结构形式。', 
        answer: '4', 
        array: [
            { name: '800', usname: false }, 
            { name: '500', usname: false },
            { name: '200', usname: false }, 
            { name: '1000', usname: false },
        ]
      },
      {
        id: '4', 
        title: '内河船舶船长（ ）及以上的船舶，应计算船体中剖面模数以校核其总纵强度。', 
        answer: '3',  
        array: [
            { name: '30m', usname: false }, 
            { name: '40m', usname: false },
            { name: '50m', usname: false }, 
            { name: '60m', usname: false },
        ]
      },
    ],
    number: 0,
    answer:0,
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 连接到后台数据库，从数据库选择新闻
        var that = this;
        wx.request({
            url:'http://localhost/wxxcx/news.php',
            success:function(res){
                console.log(res.data)
                that.setData({
                    newslist:res.data,
                })
                console.log(res.data.length)
            }
        });
        // 连接到后台数据库，从数据库中提取人员信息
        wx.request({
            url:'http://localhost/wxxcx/faxian_perinfo.php',
            success:function(res){
                console.log(res.data)
                that.setData({
                    per_info:res.data,
                    widHeight:(res.data.length+1)* that.data.height +"px",
                })
                console.log(res.data.length)
            }
        });
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
    },
    // 轮播图设置
    swiperTab: function(e) {
        var that = this;
        // 获取单个轮播循环的高度
        var heights=this.data.height;
        // 获取资讯的数组个数
        var news = this.data.newslist.length
        // 获取达人的数组个数
        var per_info = this.data.per_info.length
        console.log(news)
        console.log(per_info)
        that.setData({
          currentTab: e.detail.current
        });
        if (this.data.currentTab==2){
            that.setData({
              widHeight: heights * (news+1) + "px"
            });
          }
        //   设置轮播图高度
        else{
            that.setData({
              widHeight: heights * (per_info+1) + "px"
            });
          }
      },
      //轮播图点击切换
    clickTab: function(e) {
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
        return false;
        } else {
        that.setData({
            currentTab: e.target.dataset.current
        })
        }
    },
    // 新闻选项框内容跳转设置
    todetail: function (e) {
            var data = e.currentTarget.dataset.more;
            const target = JSON.stringify(data);
            wx.navigateTo({
            url: '/pages/detail/detail?info=' +  target
            })
    },
    // 返回上一题，减少计数
    previous:function(e){
        this.setData({
          number: this.data.number-1,
          curring: this.data.curring-1,
        })
    },
    radioChange:function(e){
        let index = e.currentTarget.dataset.index
        let id = e.currentTarget.dataset.id
        let detail = this.data.detail
        // 判断答案的对错
        for(let i = 0;i<detail.length;i++){
            if(detail[i].id == id){
                detail[i].array[index].usname = true
                for(let j = 0;j<detail[i].array.length;j++){
                    if (j != index){
                        detail[i].array[j].usname = false
                    }
                }
            }
        }
        this.setData({
          detail:detail
        })
      },
    //   下一题
      nextstep:function(e){
        let detail = this.data.detail
        let number = this.data.number
        let curring = this.data.curring
        let usname = 0;
        for(let i = 0;i<detail[number].array.length;i++){
          if(!detail[number].array[i].usname){
            usname++
          }
        }
        // 答题时不选择答案的情况
        if(usname == detail[number].array.length){
          wx.showToast({
            title: '答题选项不能为空',
            icon: 'none',
            duration: 2000
          })
          return false;
        }
        curring++
        number++
        if (curring > 3){
          curring = -1
        }
        this.setData({
          curring: curring,
          number: number,
    })
  },
//   循环算法，计算答对的题目数量
  subsic:function(e){
    let detail = this.data.detail
    let answer = 0
    let letter = ''
    for(let i = 0;i < detail.length;i++){
      for(let j = 0;j < detail[i].array.length;j++){
        if(detail[i].array[j].usname){
          letter = detail[i].answer-1
          if(letter == j){
            answer++
          }
        }
      }
    }
    // 答对题目数量显示
    wx.showToast({
      title: '答对了:' + answer + '题',
      icon: 'success',
      duration: 2000
    })
  },
})