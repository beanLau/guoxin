const router = require('koa-router')();
const newsApi = require('../api/news.js');

router.get('/newsDetail', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    let newsDetail = {}
    let urlQuery = ctx.request.query;
    resNewDetail = await newsApi.getNewsDetail(ctx,{
        id: urlQuery.id
    });
    if(resNewDetail.code == 0){
        try {
            newsDetail = resNewDetail.result || {}
        } catch (error) {
            
        }
    }
    //type：1行业信息  2通知公告 3通用标准 4技术文献 5考核标准
    await ctx.render('newsdetail/newsdetail', {
        title: newsDetail.title,
        yfpcdata: yfpcdata,
        pagePath: ctx.request.path,
        newsDetail: newsDetail
    })
})

module.exports = router