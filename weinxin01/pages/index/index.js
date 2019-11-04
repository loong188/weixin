// pages/index/index.js
Page({

    goHome() {
        this.setData({
            topNum: 0
        })
    },
    scroll(evt) {
        let scrollTop = evt.detail.scrollTop;
        // console.log(scrollTop);
        let show = 'hide';
        if (scrollTop >= 100) {
            show = 'show';
        }
        this.setData({ show })
    },
    topFun(evt) {
        // console.log(evt)
    },
    bottomFun(evt) {
        // console.log(evt)
    },
    onPullDownRefresh() {
        // console.log('下拉')
    },


    /**
     * 页面的初始数据
     */
    data: {

        topNum: 0,
        show: 'hide',

        user: [{
                img: 'https://img10.360buyimg.com/n2/s240x240_jfs/t1/33858/35/13949/95604/5d099a77E951cc4de/87e3aa3f86e7189c.jpg!q70.jpg',
                img1: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
                top1: '越南进口中原G7三合一速溶咖啡1600g（16克*100条）越南本土越文版包装',
                moddle1: '￥',
                moddle12: '78.',
                moddle13: '90',
                img2: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
                moddle2: '12万条评价 好评率99%',
                bottom1: 'G7咖啡京东自营旗舰店>',
                img3: 'https://shop.loong18.com/shop1.png'
            },
            {
                img: 'https://img13.360buyimg.com/mobilecms/s405x405_jfs/t1/77292/22/11506/250478/5d8c9788Ed07ee55a/84bab965ce8e5a84.jpg!q70.dpg.webp',
                img1: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
                imgs: 'https://img11.360buyimg.com/jdphoto/s102x28_jfs/t8488/217/823821809/2368/8468a10d/59af6602N66a24418.png',
                top1: '雀巢（Nestle）咖啡速溶1+2原味 微研墨 冲调饮品 100条1500g',
                moddle1: '￥',
                moddle12: '102.',
                moddle13: '00',
                moddle14: '满99-10',
                img2: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
                moddle2: '118万条评价 好评率99%',
                bottom1: '雀巢京东自营旗舰店>',
                img3: 'https://shop.loong18.com/shop1.png'
            },
            {
                img: 'https://img11.360buyimg.com/mobilecms/s405x405_jfs/t1/61709/21/7322/293588/5d568036E738f6bc2/598ae5112e519ccf.jpg!q70.dpg.webp',
                img1: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
                imgs: 'https://img11.360buyimg.com/jdphoto/s100x28_jfs/t7597/78/1439801434/2667/5d29b409/599cf128N4a0d891e.png',
                top1: '马来西亚进口 宜昌老街2+1原味速溶白咖啡粉 冲调饮品 100条2000g',
                moddle1: '￥',
                moddle12: '99.',
                moddle13: '90',
                moddle14: '秒杀',
                img2: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
                moddle2: '9万条评价 好评率99%',
                moddle22: '放心购',
                bottom1: '宜昌老街京东自营旗舰店>',
                img3: 'https://shop.loong18.com/shop1.png'
            },
            {
                img: 'https://img11.360buyimg.com/mobilecms/s405x405_jfs/t1/55360/39/14348/291928/5db65ea6E2724ba4e/a0335cfb80a92e3a.jpg!q70.dpg.webp',
                img1: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
                imgs: 'https://img11.360buyimg.com/jdphoto/s102x28_jfs/t8488/217/823821809/2368/8468a10d/59af6602N66a24418.png',
                top1: '麦斯威尔 特浓速溶咖啡优惠超值装90送10条 （1.3KG、盒） （新老...',
                moddle1: '￥',
                moddle12: '84.',
                moddle13: '90',
                moddle14: '券79-5',
                moddle15: '满99-10',
                img2: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
                moddle2: '36万条评价 好评率99%',
                bottom1: '麦斯威尔京东自营旗舰店>',
                img3: 'https://shop.loong18.com/shop1.png'
            },
            {
                img: 'https://img14.360buyimg.com/mobilecms/s405x405_jfs/t1/20615/1/4764/102156/5c358cd7Ee317865a/b035c12435150f9a.jpg!q70.dpg.webp',
                img1: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
                top1: '越南进口 中原G7三合一速溶咖啡800g（16克*50条）',
                moddle1: '￥',
                moddle12: '37.',
                moddle13: '90',
                img2: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
                moddle2: '21万条评价 好评率99%',
                bottom1: 'G7咖啡京东自营旗舰店>',
                img3: 'https://shop.loong18.com/shop1.png'
            },
            {
                img: 'https://img10.360buyimg.com/mobilecms/s405x405_jfs/t30451/328/74527038/350406/70d8dc6a/5be6e3f2N193b0d81.jpg!q70.dpg.webp',
                img1: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
                imgs: 'https://img11.360buyimg.com/jdphoto/s102x28_jfs/t8488/217/823821809/2368/8468a10d/59af6602N66a24418.png',
                top1: '雀巢Nestle醇品速溶黑咖啡 无蔗糖速溶咖啡粉 桶醇500g可冲277...',
                moddle1: '￥',
                moddle12: '72.',
                moddle13: '90',
                moddle14: '2件9折',
                moddle15: '秒杀',
                img2: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
                moddle2: '59万条评论 好评率99%',
                bottom1: '雀巢京东自营专区>',
                img3: 'https://shop.loong18.com/shop1.png'
            },
            {
                img: 'https://img12.360buyimg.com/mobilecms/s405x405_jfs/t1/65523/14/11501/155223/5d8c98f3E95145a8c/91a2f8ac6446a1b4.jpg!q70.dpg.webp',
                img1: 'https://img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png',
                imgs: 'https://img11.360buyimg.com/jdphoto/s102x28_jfs/t8488/217/823821809/2368/8468a10d/59af6602N66a24418.png',
                top1: '雀巢（Nestle）咖啡速溶 1+2 特浓 微研墨 冲调饮品 90条1170g...',
                moddle1: '￥',
                moddle12: '99.',
                moddle13: '00',
                moddle14: '满99-10',
                img2: 'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/12264/37/1979/1085/5c185d6dEba7743da/c5ab4d78f8bf4d90.png',
                moddle2: '38万条评价 好评率99%',
                bottom1: '雀巢京东自营旗舰店>',
                img3: 'https://shop.loong18.com/shop1.png'
            }
        ]


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    }
})