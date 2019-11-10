const router = require('koa-router')();
const indexapi = require('../api/index');
const newsApi = require('../api/news');

router.get('/', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    let resNoticeList = await newsApi.getNoticeList(ctx,{
        pageNo: 1,
        pageSize: 12
    });
    let noticeList = resNoticeList.result.records || []
    await ctx.render('index/index', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站',
        pagePath: ctx.request.path,
        yfpcdata: yfpcdata,
        noticeList: noticeList || [],
        newsList: [{id:1,title:"新闻中心新闻中心新闻中心新闻中心新闻中心一"}],
        literatureList: [{id:1,title:"技术文献技术文献技术文献技术文献技术文献一"}],
        renzhengList: [{id:1,title:"培训认证培训认证培训认证培训认证一"}],
        danweiList: [{id:1,title:"合作单位合作单位合作单位合作单位合作单位一"}],
        zhiliangList: [{id:1,title:"质量监督质量监督质量监督质量监督质量监督质量监督质量监督一"}],
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