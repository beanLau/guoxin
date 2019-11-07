const router = require('koa-router')();
const newsApi = require('../api/evaluation.js');

router.get('/evaluation', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    
    let urlQuery = ctx.request.query;
    let evalList = await newsApi.getEvalList(ctx, {
        page: urlQuery.page || 1,
        rows:4
    });

    let randomList = await newsApi.getRandomGetInformationList(ctx);
   
    await ctx.render('evaluation/evaluation', {
        title: '育方教育-专业家庭教育平台-家长测评',
        yfpcdata: yfpcdata,
        urlQuery,
        pagePath: ctx.request.path,
        evalList:evalList.data || [],
        randomList:randomList.data || []
    })
})

router.post('/checkLogin', async (ctx) => {
    result = await newsApi.checkLogin(ctx)
    ctx.body = result
})

module.exports = router