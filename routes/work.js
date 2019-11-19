const router = require('koa-router')();

router.get('/work', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let username = unescape(ctx.cookies.get('username')) || ''
    
    let urlQuery = ctx.request.query;
    await ctx.render('work/work', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        gxtoken: gxtoken,
        username: username,
        urlQuery,
        workType: urlQuery.type || 1
    })
})

module.exports = router