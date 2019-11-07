const router = require('koa-router')();

router.get('/course', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    await ctx.render('course/course', {
        title: '育方教育-专业家庭教育平台-课程介绍',
        pagePath: ctx.request.path,
        yfpcdata: yfpcdata
    })
})

module.exports = router