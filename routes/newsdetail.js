const router = require('koa-router')();
const newsApi = require('../api/news.js');

router.get('/newsDetail', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let username = unescape(ctx.cookies.get('username')) || ''
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
        gxtoken: gxtoken,
        username: username,
        pagePath: ctx.request.path,
        newsDetail: newsDetail
    })
})

module.exports = router