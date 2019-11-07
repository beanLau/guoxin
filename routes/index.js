const router = require('koa-router')();
const indexapi = require('../api/index');

router.get('/', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    await ctx.render('index/index', {
        title: '育方教育-专业家庭教育平台',
        pagePath: ctx.request.path,
        yfpcdata: yfpcdata
    })
})
router.post('/getCode', async (ctx) => {
    result = await indexapi.getCode(ctx)
    ctx.body = result
})
router.post('/quickLogin', async (ctx) => {
    result = await indexapi.quickLogin(ctx)
    ctx.body = result
})
router.post('/loginout', async (ctx) => {
    result = await indexapi.loginout(ctx)
    ctx.body = result
})
module.exports = router