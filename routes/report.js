const router = require('koa-router')();

router.get('/report', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    let formData = ctx.request.query;
    await ctx.render('report/report', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        yfpcdata: yfpcdata,
        formData: formData,
        reportType: formData.type || 0,
        reportList: [{id:1,title:"国内贸易发展“十二五”规划"}]
    })
})
router.post('/report', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    let formData = ctx.request.body
    let urlQuery = ctx.request.query;
    await ctx.render('report/report', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        yfpcdata: yfpcdata,
        urlQuery,
        reportType: urlQuery.type || 0,
        reportList: [{id:1,title:"国内贸易发展“十二五”规划"}]
    })
})
module.exports = router