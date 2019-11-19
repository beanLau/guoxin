const router = require('koa-router')();
const indexapi = require('../api/index');

router.get('/', async(ctx) => {
    console.log(ctx.request.headers)
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let username = unescape(ctx.cookies.get('username')) || ''
    let noticeList = []
    let hangyeList = []
    let tecDocList = []
    let renderData = {}
    let res = await Promise.all([indexapi.getNoticeList(ctx, {
        pageNo: 1,
        pageSize: 12
    }), indexapi.getHangyeList(ctx, {
        pageNo: 1,
        pageSize: 12
    }), indexapi.getTecDocList(ctx, {
        pageNo: 1,
        pageSize: 12
    })])
    let resNoticeList = res[0]
    if (resNoticeList.code == 0) {
        try {
            noticeList = resNoticeList.result.records || []
        } catch (error) {

        }
    }
    let resHangyeList = res[1]
    if (resHangyeList.code == 0) {
        try {
            hangyeList = resHangyeList.result.records || []
        } catch (error) {

        }
    }
    let resTecDocList = res[2]
    if (resHangyeList.code == 0) {
        try {
            tecDocList = resTecDocList.result.records || []
        } catch (error) {

        }
    }
    renderData = {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站',
        pagePath: ctx.request.path,
        gxtoken: gxtoken,
        username: username,
        noticeList: noticeList,
        newsList: hangyeList,
        literatureList: tecDocList,
        renzhengList: [{ id: 1, title: "培训认证培训认证培训认证培训认证一" }],
        danweiList: [{ id: 1, title: "合作单位合作单位合作单位合作单位合作单位一" }],
        zhiliangList: [{ id: 1, title: "质量监督质量监督质量监督质量监督质量监督质量监督质量监督一" }]
    }
    await ctx.render('index/index', renderData)
})
router.post('/getCode', async(ctx) => {
    result = await indexapi.getCode(ctx)
    ctx.body = result
})
router.post('/quickLogin', async(ctx) => {
    result = await indexapi.quickLogin(ctx)
    ctx.body = result
})
router.post('/loginout', async(ctx) => {
    result = await indexapi.loginout(ctx)
    ctx.body = result
})
module.exports = router