const router = require('koa-router')();

router.get('/literature', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    
    let urlQuery = ctx.request.query;

    await ctx.render('literature/literature', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站',
        pagePath: ctx.request.path,
        yfpcdata: yfpcdata,
        urlQuery,
        literatureType: urlQuery.type || 0,
        literatureList: [{id:1,title:"防震手表国际标准",content: "本国际标准准规定了手表防震性能的最低要求及相应的试验方法。",date: "2019-11-09",count: 2393}]
    })
})

module.exports = router