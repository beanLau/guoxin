const router = require('koa-router')();

router.get('/login', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    
    let urlQuery = ctx.request.query;
    await ctx.render('login', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path
    })
})

module.exports = router