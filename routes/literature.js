const router = require('koa-router')();
const literatureapi = require('../api/literature.js');

router.get('/literature', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let username = ctx.cookies.get('username') || ''
    
    let urlQuery = ctx.request.query
    let literatureList = [];
    let resLiteratureList;
    let pageInfo = {
        current: 1,
        pages: 1,
        total: 0
    }
    //通用标准
    if(!urlQuery.type || urlQuery.type == 0){ //通用标准
        resLiteratureList = await literatureapi.getRuleList(ctx,{
            pageNo: urlQuery.page || 1,
            pageSize: 10
        });
    }else if(urlQuery.type == 1){ //技术文献
        resLiteratureList = await literatureapi.getTecDocList(ctx,{
            pageNo: urlQuery.page || 1,
            pageSize: 10
        });
    }else{ //考核标准
        resLiteratureList = await literatureapi.getKhbzList(ctx,{
            pageNo: urlQuery.page || 1,
            pageSize: 10
        });
    }
    if(resLiteratureList.code == 0){
        try {
            literatureList = resLiteratureList.result.records || []
            pageInfo.current = resLiteratureList.result.current
            pageInfo.pages = resLiteratureList.result.pages
            pageInfo.total = resLiteratureList.result.total
        } catch (error) {
            
        }
    }

    await ctx.render('literature/literature', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站',
        pagePath: ctx.request.path,
        gxtoken: gxtoken,
        username: username,
        urlQuery,
        literatureType: urlQuery.type || 0,
        pageInfo: pageInfo, 
        literatureList: literatureList
    })
})

module.exports = router