const router = require('koa-router')();
const newsApi = require('../api/news_detail.js');

router.get('/newsDetail', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    
    let urlQuery = ctx.request.query;
    let detailData = await newsApi.getInformation(ctx,{
        id:urlQuery.id
    });
    let randomList = await newsApi.getRandomGetInformationList(ctx);
   
    await ctx.render('news_detail/news_detail', {
        title: detailData.data.title,
        yfpcdata: yfpcdata,
        pagePath: ctx.request.path,
        data:detailData.data,
        randomList:randomList.data
    })
})

module.exports = router