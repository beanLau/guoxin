const router = require('koa-router')();
const orgapi = require('../api/org.js');

router.get('/orgdesc', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    let zizhiList = []
    let pageContent = {
        aboutGJ: {
            info: ""
        },
        organize: {
            info: ""
        },
        historyBack: {
            info: ""
        }
    }
    let pageInfo = {
        current: 1,
        pages: 1,
        total: 0
    }
    let urlQuery = ctx.request.query;
    if(urlQuery.type == 2){
        resData = await orgapi.getZizhiList(ctx,{
            pageNo: urlQuery.page || 1,
            pageSize: 10
        })
        if(resData.code == 0){
            try {
                zizhiList = resData.result.records || []
                pageInfo.current = resData.result.current
                pageInfo.pages = resData.result.pages
                pageInfo.total = resData.result.total
            } catch (error) {
                
            }
        }
    }else{
        resData = await orgapi.getOrgInfo(ctx)
        pageContent = resData.result
    }
    
    await ctx.render('orgdesc/orgdesc', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        yfpcdata: yfpcdata,
        urlQuery,
        pageContent: pageContent,
        zizhiList: zizhiList,
        orgType: urlQuery.type || 0,
        pageInfo: pageInfo
    })
})
router.get('/qualification', async (ctx) => {
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
    yfpcdata = decodeURIComponent(yfpcdata)
    yfpcdata = JSON.parse(yfpcdata)
    let newsDetail = {}
    let urlQuery = ctx.request.query;
    resNewDetail = await orgapi.getNewsDetail(ctx,{
        id: urlQuery.id
    });
    if(resNewDetail.code == 0){
        try {
            newsDetail = resNewDetail.result || {}
        } catch (error) {
            
        }
    }
    //type：1行业信息  2通知公告 3通用标准 4技术文献 5考核标准
    await ctx.render('qualification/qualification', {
        title: newsDetail.title,
        yfpcdata: yfpcdata,
        pagePath: ctx.request.path,
        newsDetail: newsDetail
    })
})

module.exports = router