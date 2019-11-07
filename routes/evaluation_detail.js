const router = require('koa-router')();
const newsApi = require('../api/evaluation_detail.js');

router.get('/evaluationDetail', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)

    let urlQuery = ctx.request.query;
    let randomList = await newsApi.getRandomGetInformationList(ctx);

    await ctx.render('evaluation_detail/evaluation_detail', {
        title: '育方教育-专业家庭教育平台-测评',
        yfpcdata: yfpcdata,
        pagePath: ctx.request.path,
        randomList:randomList.data
    })
})

router.post('/EvalQuestionList',async (ctx) => {
    let urlQuery = ctx.request.body;
    let result = await newsApi.getEvalQuestionList(ctx,urlQuery)
    ctx.body = result;
})

router.post('/SubmitQuestion',async (ctx) => {
    let urlQuery = ctx.request.body;
    let result = await newsApi.SubmitQuestion(ctx,urlQuery)
    ctx.body = result;
})

module.exports = router