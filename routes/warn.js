const router = require('koa-router')();
const warnapi = require('../api/warn.js');

router.get('/warn', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let username = unescape(ctx.cookies.get('username')) || ''
    let urlQuery = ctx.request.query
    let warnList = [];
    let warnRes;
    let pageInfo = {
        current: 1,
        pages: 1,
        total: 0
    }
    warnRes = await warnapi.getWarnList(ctx,{
        pageNo: urlQuery.page || 1,
        pageSize: 10
    });
    if(warnRes.code == 0){
        try {
            warnList = warnRes.result.records || []
            pageInfo.current = warnRes.result.current
            pageInfo.pages = warnRes.result.pages
            pageInfo.total = warnRes.result.total
        } catch (error) {
            
        }
    }

    await ctx.render('warn/warn', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        gxtoken: gxtoken,
        username: username,
        urlQuery,
        pageInfo: pageInfo,
        warnList: warnList
    })
})
router.get('/warnDetail', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let username = unescape(ctx.cookies.get('username')) || ''
    let queryData = ctx.request.query;
    let warnDetail = {
        mhwarn:{
            type: 1
        }
    };
    let reswarn;
    reswarn = await warnapi.getWarnDetail(ctx,{
        id: encodeURI(queryData.id || 1)
    });
    if(reswarn.code == 0){
        try {
            warnDetail = reswarn.result || {}
        } catch (error) {
            
        }
    }
    await ctx.render('warnDetail/warnDetail', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        gxtoken: gxtoken,
        username: username,
        warnDetail: warnDetail
    })
})

module.exports = router