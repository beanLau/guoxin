const router = require('koa-router')();
const orgapi = require('../api/org.js');

router.get('/orgdesc', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let username = ctx.cookies.get('username') || ''
    let pageContent = {
        aboutGJ: {
            info: ""
        },
        organize: {
            info: ""
        },
        historyBack: {
            info: ""
        },
        zizhiZZ:{
            info: ""
        }
    }
    let urlQuery = ctx.request.query;
    resData = await orgapi.getOrgInfo(ctx)
    if(resData.code == 0){
        try {
            pageContent = resData.result || {}
        } catch (error) {
            
        }
    }
    
    await ctx.render('orgdesc/orgdesc', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        gxtoken: gxtoken,
        username: username,
        urlQuery,
        pageContent: pageContent,
        orgType: urlQuery.type || 0
    })
})

module.exports = router