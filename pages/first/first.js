// pages/first/first.js
// 引入ec-canvas折线图的库
import * as echarts from '../../ec-canvas/echarts';
const app = getApp()
// 设置折线图相关数据
function initChart(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);
    var option = {
        title: {
            text: '近日4-5万吨运价（单位：元/吨）',
            left: 'left',
            color:'#000000'
        },
        color: ["#37A2DA"],
        tooltip: {
            show: true,
            trigger: 'axis'
        },
        // x轴
        xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            show: true,
            textStyle: {
            //   color: '#000',
            fontSize: '14',
            }}
        },
        // y轴
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [19, 13, 20, 16, 14, 21, 18],
        // data:this.data.price,
        type: 'line'
    }]
  };
    chart.setOption(option);
    return chart;
}
Page({
    /**
     * 页面的初始数据
     */
    data: {
        newslist:[],
        indicatorDots: true,  //小点
        autoplay: true,  //是否自动轮播
        interval: 5000,  //间隔时间
        duration: 3000,  //滑动时间
        height: 0,
        ec: {
            onInit: initChart
        },
        func_1:[],
        func_2:[],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this;
        // 连接到数据库，提取新闻相关信息
        wx.request({
            url:'http://localhost/wxxcx/news.php',
            success:function(res){
                console.log(res.data)
                that.setData({
                    newslist:res.data
                })
                console.log(res.data.length)
            }
        });
        // 从数据库中提取功能图片和描述，实现动态的添加功能
        wx.request({
            url:'http://localhost/wxxcx/first_func_1.php',
            success:function(res){
                console.log(res.data)
                that.setData({
                    func_1:res.data
                })
                console.log(res.data.length)
            }
        });
        // 从数据库中提取功能图片和描述，实现动态的添加功能
        wx.request({
            url:'http://localhost/wxxcx/first_func_2.php',
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
        return{
            title : "智慧船舶",
            path : "/pages/first/first"
        }
    },
    showInput: function () {
        this.setData({
          inputShowed: true
        });
      },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
        // getList(this);
    },
    clearInput: function () {
        this.setData({
          inputVal: ""
        });
        // getList(this);
    },
    inputTyping: function (e) {
        //搜索数据
        // getList(this, e.detail.value);
        this.setData({
          inputVal: e.detail.value
        });
    },
    //轮播图的切换事件
    swiperChange: function (e) {
        this.setData({
        swiperCurrent: e.detail.current
        })
    },
     //点击指示点切换
    chuangEvent: function (e) {
        this.setData({
        swiperCurrent: e.currentTarget.id
        })
    },
     //设置轮播容器的高度
    setContainerHeight: function (e) {
        //图片的原始宽度
        var imgWidth = e.detail.width;
        //图片的原始高度
        var imgHeight = e.detail.height;
        //同步获取设备宽度
        var sysInfo = wx.getSystemInfoSync();
        console.log("sysInfo:", sysInfo);
        //获取屏幕的宽度
        var screenWidth = sysInfo.screenWidth;
        //获取屏幕和原图的比例
        var scale = screenWidth / imgWidth;
        //设置容器的高度
        this.setData({
            height: imgHeight * scale
        })
        console.log(this.data.height);
    },
    todetail: function (e) {
        // 跳转到detail页面
        // console.log(e.currentTarget.dataset.more);
        var data = e.currentTarget.dataset.more;
       // const data= that.data.newsList[e.target.dataset.options];
        const target = JSON.stringify(data);
        // console.log(target);
        wx.navigateTo({
        url: '/pages/detail/detail?info=' +  target
        })
    }
})






