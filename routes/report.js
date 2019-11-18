const router = require('koa-router')();
const reportapi = require('../api/report.js');

router.get('/report', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let formData = ctx.request.query;
    let reportList = [];
    let resReport;
    let pageInfo = {
        current: 1,
        pages: 1,
        total: 0
    }
    resReport = await reportapi.getReportList(ctx,{
        type: formData.type || 1,
        reportCode: formData.reportCode  || "",
        sampleCode: formData.sampleCode  || "",
        pageNo: formData.page || 1,
        pageSize: 10
    });
    if(resReport.code == 0){
        try {
            reportList = resReport.result.records || []
            pageInfo.current = resReport.result.current
            pageInfo.pages = resReport.result.pages
            pageInfo.total = resReport.result.total
        } catch (error) {
            
        }
    }
    await ctx.render('report/report', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        gxtoken: gxtoken,
        formData: formData,
        reportType: formData.type || 1,
        reportList: reportList,
        pageInfo: pageInfo
    })
})
router.get('/reportDetail', async (ctx) => {
    let gxtoken = ctx.cookies.get('gxtoken') || ''
    let queryData = ctx.request.query;
    let reportDetail = {};
    let resReport;
    resReport = await reportapi.getReportDetail(ctx,{
        id: queryData.id || 1
    });
    if(resReport.code == 0){
        try {
            reportDetail = resReport.result || {}
        } catch (error) {
            
        }
    }
    console.log(reportDetail)
    await ctx.render('reportdetail/reportdetail', {
        title: '中国商业联合会钟表眼镜商品质量监督检测中心 国家消费争议商品检测中心 官方网站-联系我们-联系方式',
        pagePath: ctx.request.path,
        gxtoken: gxtoken,
        reportType: reportDetail.type || 1,
        reportDetail: reportDetail
    })
})
module.exports = router