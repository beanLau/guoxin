const router = require('koa-router')();
const publicapi = require('../api/public.js');

router.get('/public', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let username = unescape(ctx.cookies.get('username')) || ''
    let pageInfo = {
        current: 1,
        pages: 1,
        total: 0
    }
    let publicList = []
    let urlQuery = ctx.request.query;
    let resNewList = await publicapi.getPublicList(ctx,{
        type: urlQuery.type || 1,
        pageNo: urlQuery.page || 1,
        pageSize: 10
    });
    if(resNewList.code == 0){
        try {
            publicList = resNewList.result.records || []
            pageInfo.current = resNewList.result.current
            pageInfo.pages = resNewList.result.pages
            pageInfo.total = resNewList.result.total
        } catch (error) {
            
        }
    }
    await ctx.render('public/public', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        gxtoken: gxtoken,
        username: username,
        urlQuery,
        publicType: urlQuery.type || 1,
        pageInfo: pageInfo,
        publicList: publicList
    })
})

router.get('/publicdetail', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let username = unescape(ctx.cookies.get('username')) || ''
    let publicdetail = {}
    let urlQuery = ctx.request.query;
    resDetail = await publicapi.getPublicDetail(ctx,{
        id: urlQuery.id
    });
    if(resDetail.code == 0){
        try {
            publicdetail = resDetail.result || {}
        } catch (error) {
            
        }
    }
    //type：1行业信息  2通知公告 3通用标准 4技术文献 5考核标准
    await ctx.render('publicdetail/publicdetail', {
        title: publicdetail.title,
        gxtoken: gxtoken,
        username: username,
        pagePath: ctx.request.path,
        publicDetail: publicdetail
    })
})

module.exports = router