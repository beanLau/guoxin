const router = require('koa-router')();
const indexapi = require('../api/index.js');

router.get('/news', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let username = unescape(ctx.cookies.get('username')) || ''
    let urlQuery = ctx.request.query
    let newsList = [];
    let resNewList;
    let pageInfo = {
        current: 1,
        pages: 1,
        total: 0
    }
    //获取公告
    if(urlQuery.title){
        resNewList = await indexapi.getAllNewList(ctx,{
            pageNo: urlQuery.page || 1,
            pageSize: 10,
            title: encodeURI(urlQuery.title)
        });
        urlQuery.type = 9
    }else if(!urlQuery.type || urlQuery.type == 0){ //获取行业信息，新闻
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
            newsList = resNewList.result.records || []
            pageInfo.current = resNewList.result.current
            pageInfo.pages = resNewList.result.pages
            pageInfo.total = resNewList.result.total
        } catch (error) {
            
        }
    }

    await ctx.render('news/news', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        gxtoken: gxtoken,
        username: username,
        urlQuery,
        newsType: urlQuery.type || 0,
        pageInfo: pageInfo,
        newsList: newsList
    })
})

module.exports = router