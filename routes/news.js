const router = require('koa-router')();
const newsApi = require('../api/news.js');

router.get('/news', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    
    let urlQuery = ctx.request.query;
    // let newsType = await newsApi.getInformationTypeList(ctx);
    // let newsList = null;
    // if(newsType.data.length != 0){
    //     newsList = await newsApi.getInformationPageList(ctx, {
    //         page: urlQuery.page || 1,
    //         id:urlQuery.type || newsType.data[0]&&newsType.data[0].id,
    //         rows:4
    //     });
    // }
    await ctx.render('news/news', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        yfpcdata: yfpcdata,
        urlQuery,
        newsType: urlQuery.type || 0,
        newsList: [{id:1,title:"国内贸易发展“十二五”规划"}]
    })
})

module.exports = router