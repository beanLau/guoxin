const router = require('koa-router')();
const newsApi = require('../api/news.js');

router.get('/news', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    
    let urlQuery = ctx.request.query;
    let newsType = await newsApi.getInformationTypeList(ctx);
    let newsList = null;
    if(newsType.data.length != 0){
        newsList = await newsApi.getInformationPageList(ctx, {
            page: urlQuery.page || 1,
            id:urlQuery.type || newsType.data[0]&&newsType.data[0].id,
            rows:4
        });
    }
  
    await ctx.render('news/news', {
        title: '育方教育-专业家庭教育平台-育儿资讯',
        pagePath: ctx.request.path,
        yfpcdata: yfpcdata,
        urlQuery,
        newsType: newsType.data,
        newsList: newsList&&newsList.data || []
    })
})

module.exports = router