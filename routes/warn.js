const router = require('koa-router')();
const indexapi = require('../api/index.js');

router.get('/warn', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let username = ctx.cookies.get('username') || ''
    let urlQuery = ctx.request.query
    let warnList = [];
    let resNewList;
    let pageInfo = {
        current: 1,
        pages: 1,
        total: 0
    }
    //获取公告
    if(!urlQuery.type || urlQuery.type == 0){ //获取行业信息，新闻
        resNewList = await indexapi.getHangyeList(ctx,{
            pageNo: urlQuery.page || 1,
            pageSize: 10
        });
    }else{ //获取公告通知
        resNewList = await indexapi.getNoticeList(ctx,{
            pageNo: urlQuery.page || 1,
            pageSize: 10
        });
    }
    if(resNewList.code == 0){
        try {
            warnList = resNewList.result.records || []
            pageInfo.current = resNewList.result.current
            pageInfo.pages = resNewList.result.pages
            pageInfo.total = resNewList.result.total
        } catch (error) {
            
        }
    }

    await ctx.render('warn/warn', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        gxtoken: gxtoken,
        username: username,
        urlQuery,
        warnType: urlQuery.type || 0,
        pageInfo: pageInfo,
        warnList: warnList
    })
})

module.exports = router