// pages/detail/detail.js
Page({
    onShareAppMessage() {
        return {
            title: '京东JD.COM全部商品分类,为您展示所有品类详细分布。选商品看分类,让您的购物更便捷、轻松!网购上京东,省钱又放心!',
            imageUrl: 'https://shop.loong18.com/tu.jpg',
            path: '/pages/index/index'

        }
    },
    goHome() {
        this.setData({
            topNum: 0
        })
    },
    scroll(evt) {
        let scrollTop = evt.detail.scrollTop;
        // console.log(scrollTop);
        let show = 'hide';
        if (scrollTop >= 50) {
            show = 'show';
        }
        this.setData({ show })
    },
    /**
     * 页面的初始数据
     */
    data: {
        topNum: 0,
        show: 'hide',
        imgs: [
            'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/33858/35/13949/95604/5d099a77E951cc4de/87e3aa3f86e7189c.jpg!q80.dpg.webp',
            'https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/60777/28/10454/304706/5d807e32E020f0415/896f4d9a0d256880.jpg!q70.dpg.webp',
            'https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/82961/26/10653/345565/5d807e32E65142fbb/7f0a53e295b5a2d2.jpg!q70.dpg.webp',
            'https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t17599/33/2587930945/209626/870ef5b7/5afe84b0N860e0ebc.jpg!q70.dpg.webp'
        ],
        details: [{
                img5: 'https://img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png',
                mingzi: '一勺',
                data1: '2019-09-18',
                data2: '很优质的咖啡！味道很正，香味浓郁，这次趁着活动，搞了越南原装进口版的来喝，这么满满的三大袋，小半年喝起肯定不是问题。个人觉得，这款更好喝一些，味道纯正，口感也很好，虽然贵一点，但值这个价，算是速溶咖啡里面很物美价廉的了。'
            },
            {
                img5: 'https://storage.360buyimg.com/i.imageUpload/31353036323337333738335f7031343238303634313131353534_sma.jpg',
                mingzi: 'lianafas',
                data1: '2019-09-18',
                data2: '上次朋友从国外带回一袋，才第一次接触这个牌子的咖啡，喝过之后感觉很不错，浓浓的，香气四溢！京东上搜索竟然有同样的，收到货后没想到内含100小包是这么大一大包，一次购买了两大袋200包，不知道要喝到什么时候了'
            },
            {
                img5: 'https://img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png',
                mingzi: '绝顶都不聪明',
                data1: '2019-09-10',
                data2: '超级大的一大袋子，满满的咖啡，顺手拿出一包，给点阳光就灿烂，给点开水就泡咖啡☕️，味道非常的好，非常喜欢喝的一款咖啡，浓厚的咖啡醇香浓郁，苦味不重，棒棒哒的。价格实惠，味道浓郁，在京东购物放心呀，而且发货速度快呀，美美哒，感谢京东超级好的服务，快递小哥爬到六楼送货上门，每天喝一杯🍺，暖暖的胃，度过了一种很美妙的时光，渐渐地喜欢上了这种味道和感觉，并把他推荐给我身边的好朋友，好东西就要应该和大家一起分享。'
            }, {
                img5: 'https://storage.360buyimg.com/i.imageUpload/6b6974747a68616e67796531343431383438353337323031_sma.jpg',
                mingzi: 'fgasfaffa',
                data1: '2019-09-09',
                data2: 'G7的咖啡买过一次，价格实惠，味道也挺好。一大包喝了很久，这次趁着活动，搞了原版的来喝，这么满满的一大袋，小半年喝起肯定不是问题。而且这款的提神效果不错，几乎每天都要喝一袋，算是速溶咖啡里面很物美价廉的了。'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    }
})