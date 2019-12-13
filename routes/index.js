const router = require('koa-router')();
const indexapi = require('../api/index');
const publicapi = require('../api/public.js');
const warnapi = require('../api/warn.js');

router.get('/', async(ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let username = unescape(ctx.cookies.get('username')) || ''
    let noticeList = []
    let hangyeList = []
    let tecDocList = []
    let ruleList = []
    let khbzList = []
    let bannerList = []
    let companyList = []
    let publicList = []
    let warnList = []
    let renderData = {}
    let res = await Promise.all([indexapi.getNoticeList(ctx, {
        pageNo: 1,
        pageSize: 8
    }), indexapi.getHangyeList(ctx, {
        pageNo: 1,
        pageSize: 8
    }), indexapi.getTecDocList(ctx, {
        pageNo: 1,
        pageSize: 8
    }),indexapi.getCompanyList(ctx, {
        pageNo: 1,
        pageSize: 8
    }),indexapi.getRuleList(ctx, {
        pageNo: 1,
        pageSize: 8
    }),indexapi.getKhbzList(ctx, {
        pageNo: 1,
        pageSize: 8
    }),publicapi.getPublicList(ctx, {
        pageNo: 1,
        pageSize: 8
    }),indexapi.getBannerList(ctx, {
        pageNo: 1,
        pageSize: 8
    }),warnapi.getShixinList(ctx,{
        pageNo: 1,
        pageSize: 8
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
    let resCompanyList = res[3]
    if (resCompanyList.code == 0) {
        try {
            companyList = resCompanyList.result.records || []
        } catch (error) {

        }
    }
    
    let resRuleList = res[4]
    if (resRuleList.code == 0) {
        try {
            ruleList = resRuleList.result.records || []
        } catch (error) {

        }
    }

    let reskhbzList = res[5]
    if (reskhbzList.code == 0) {
        try {
            khbzList = reskhbzList.result.records || []
        } catch (error) {

        }
    }

    let resPublicList = res[6]
    if (resPublicList.code == 0) {
        try {
            publicList = resPublicList.result.records || []
        } catch (error) {

        }
    }

    let resBannerList = res[7]
    if (resBannerList.code == 0) {
        try {
            bannerList = resBannerList.result.records || []
        } catch (error) {

        }
    }
    
    let resWarnList = res[8]
    if (resWarnList.code == 0) {
        try {
            warnList = resWarnList.result.records || []
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
        ruleList: ruleList,
        khbzList: khbzList,
        publicList: publicList,
        renzhengList: [{ id: 1, title: "培训认证培训认证培训认证培训认证一" }],
        danweiList: [{ id: 1, title: "合作单位合作单位合作单位合作单位合作单位一" }],
        zhiliangList: [{ id: 1, title: "质量监督质量监督质量监督质量监督质量监督质量监督质量监督一" }],
        companyList: companyList,
        bannerList: bannerList,
        warnList: warnList
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