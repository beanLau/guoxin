const fetch = require('./utils');

// 通知公告
let getReportList = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: `menhu/mhReport/list?type=${data.type}&reportCode=${data.reportCode || ""}&sampleCode=${data.sampleCode || ""}&pageNo=${data.pageNo}&pageSize=${data.pageSize}`,
        headers:{
            "token": ctx.cookies.get('yfpctoken')
        },
        body:data
    })
}

let getReportDetail  = function(ctx,data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhReport/getBySampleCode?code=' + data.id,
        headers:{
            "token": ctx.cookies.get('yfpctoken')
        },
        body:data
    })
}

module.exports = {
    getReportList,
    getReportDetail
}

