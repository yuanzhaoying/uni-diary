// pages/detail/detail.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        flag: false,
        info:{},
        content:'',//文本类容
    bottomHeight:0 //定义comment容器与page容器下边界之间的距离
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that=this;
        var info= JSON.parse(options.info);
        console.log(info.detail);
        that.setData({
        info:info
        })
        console.log(this.data.info);
        // console.log(options.info);
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
// 获取焦点 唤起软键盘
    bindfocus(e){
    console.log(e, '键盘弹起')
    console.log(e)
    this.setData({
      bottomHeight:e.detail.height //将键盘的高度设置为comment容器与page容器下边界之间的距离。
    })
    },
    // 输入内容
    bindinput(e){
      this.setData({
        content:e.detail.value
      })
    },
    // 失去焦点 
    bindblur(e){
      console.log(e, '收起键盘')
      this.setData({
        bottomHeight:0
      })
    },
    //
    sendOut(){
      let {content}=this.data //使用解构 
      //调用发送接口
    }
})