// pages/first/first.js

import * as echarts from '../../ec-canvas/echarts';
const app = getApp()

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
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [19, 13, 20, 16, 14, 21, 18],
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
        newslist: [
            {
            id : 1,
            src : "/pages/pic/xinwen-img/xinwen-01.jpg",
            time: "2022-07-14 15:10",
            title : "坚持政治引领 凝聚奋斗力量——直属海事系统持续深化模范机关建设侧记",
            source : "中华人民共和国海事局",
            author : "xxx",
            detail : "连日来，直属海事系统各级党组织深入学习贯彻习近平总书记在中央和国家机关党的建设工作会议上的重要讲话精神，围绕中心抓党建、抓好党建促业务，深入开展模范机关创建工作，涌现出了一批讲政治、守纪律、负责任、有效率的模范机关，在推进海事高质量发展、服务交通强国建设、当好中国现代化开路先锋的新征程中发挥了表率作用、作出了重要贡献。"
        },{
            id : 2,
            src : "/pages/pic/xinwen-img/xinwen-02.png",
            title : "航海日丨挂满旗 鸣笛 各地海事部门隆重庆祝第18个中国航海日",
            time : "2022-07-12 10:08",
            source : "中华人民共和国海事局",
            author : "xxx",
            detail : "7月11日，是郑和下西洋首航的日期，也是“世界海事日”在我国的实施日期。2005年，国务院批准将每年7月11日确定为“中国航海日”，这是由政府主导、全民参加的全国性文化范畴的法定活动日。今年是中国第18个航海日，主题是“引领航海绿色低碳智能新趋势”。为庆祝航海日的到来，各地海事部门纷纷组织内容丰富的涉海航行活动，中国籍民用船舶、中国航运企业拥有或经营的非中国籍船舶挂满旗，并在上午9点时统一鸣笛1分钟，相关涉海机构也参照船舶挂满旗的方式悬挂旗帜。"
        },{
            id : 3,
            src : "/pages/pic/xinwen-img/xinwen-03.png",
            title : "直属海事系统代表参加“国际海事妇女教育与发展高端论坛",
            time : "2022-06-09 10:05",
            source : "中华人民共和国海事局",
            author : "xxx",
            detail :"6月8日下午，经交通运输部批准、大连海事大学举办的“国际海事妇女教育与发展高端论坛”以线上方式举行，来自中国、英国、瑞典、俄罗斯、澳大利亚、韩国等国家，以及国际海事组织（IMO）秘书处、世界海事大学（WMU）的150余名代表参加论坛。大连海事大学校长孙玉清和交通运输部国际合作司副司长李冠玉出席开幕式并致辞，交通运输部海事局二级巡视员曾晖、上海海事局下属浦东海事局副局长陈维作为嘉宾参加论坛，并作主旨发言。"
        },{
            id : 4,
            src : "/pages/pic/xinwen-img/xinwen-04.jpg",
            title : "直属海事系统“喜迎二十大 永远跟党走 奋进新征程”“青春”主题演讲成功举办",
            time : "2022-05-27 10:01",
            source : "中华人民共和国海事局",
            author : "xxx",
            detail : "为深入学习贯彻习近平总书记在庆祝中国共产主义青年团成立100周年大会上的重要讲话精神，5月25日下午，直属海事系统成功举办“喜迎二十大 永远跟党走 奋进新征程”“青春”主题演讲活动。交通运输部海事局党组书记、局长李国平同志作了讲话，勉励广大海事青年要时刻牢记习近平总书记对青年成长成才的殷殷嘱托，自觉将“小我”融入祖国和人民的“大我”，坚定信念，砥砺奋进，在建设人民满意海事、服务交通强国建设的伟大实践中贡献青春力量。"
        },{
            id : 5,
            src : "/pages/pic/xinwen-img/xinwen-05.png",
            title : "深化《广州声明》 第四届东盟地区论坛渡运安全研讨会在粤闭幕",
            time : "2022-07-11 15:25",
            source : "中华人民共和国海事局",
            author : "xxx",
            detail : "7月7日，为期两天的第四届东盟地区论坛（ARF）渡运安全研讨会正式闭幕。本次研讨会由中国海事局与泰国海事局共同主办，广东海事局承办。来自论坛15个参与国，以及国际海事组织（IMO）、联合国亚洲及太平洋经济社会委员会、国际渡运协会等国际组织的128名专家在线参会，就各国渡运安全现状和发展趋势、渡运安全最佳管理实践、高新技术运用等话题深入对话与交流，并对泰国旅游客船以及我国广东、广西有代表性的渡运安全运营和管理实践进行现场直播展示。"
        }],
        indicatorDots: true,  //小点
        autoplay: true,  //是否自动轮播
        interval: 5000,  //间隔时间
        duration: 3000,  //滑动时间
        height: 0,
        ec: {
            onInit: initChart
        },
        func_1:[
            {
                func_img : "/pages/pic/首页/功能/0101.png",
                text : "租船找货"
            },{
                func_img : "/pages/pic/首页/功能/0102.png",
                text : "备件物料"
            },{
                func_img : "/pages/pic/首页/功能/0103.png",
                text : "运价报价"
            },{
                func_img : "/pages/pic/首页/功能/0104.png",
                text : "船舶买卖"
            }],
        func_2:[{
                func_img : "/pages/pic/首页/功能/0201.png",
                text : "海事服务"
            },{
                func_img : "/pages/pic/首页/功能/0202.png",
                text : "船员服务"
            },{
                func_img : "/pages/pic/首页/功能/0203.png",
                text : "船舶供油"
            },{
                func_img : "/pages/pic/首页/功能/0204.png",
                text : "船舶保险"
            }
        ]
      
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
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
        // var news_id =e.currentTarget.id;
        // console.log(news_id);
        // console.log(e.currentTarget.dataset.more);
        var data = e.currentTarget.dataset.more;

        // var that=this;
        // const data= that.data.newsList[e.target.dataset.options];
        const target = JSON.stringify(data);
        // console.log(target);
        wx.navigateTo({
        url: '/pages/detail/detail?info=' +  target
        })
    }
    
})






