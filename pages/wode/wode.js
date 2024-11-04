// pages/wode/wode.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        func_1:[],
        func_2:[]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this;
        // 从数据库中调取功能图片和功能描述，实现动态的功能调整
        wx.request({
            url:'http://localhost/wxxcx/wode_func_1.php',
            success:function(res){
                console.log(res.data)
                that.setData({
                    func_1:res.data
                })
                console.log(res.data.length)
            }
        });
        // 从数据库中调取功能图片和功能描述，实现动态的功能调整
        wx.request({
            url:'http://localhost/wxxcx/wode_func_2.php',
            success:function(res){
                console.log(res.data)
                that.setData({
                    func_2:res.data
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
    }
})