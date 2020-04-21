const fetch = require('./utils');

// 通知公告
let getReportList = function(ctx, data){
    data.sampleCode = encodeURI(data.sampleCode)
    if(data.type == 7){
        return fetch({ 
            method: 'get',
            url: `menhu/mhReport/getRepairByShibeiCode?code=${data.sampleCode}`,
            headers:{
                "token": ctx.cookies.get('gxtoken')
            },
            body:data
        }) 
    }
    return fetch({ 
        method: 'get',
        url: `menhu/mhReport/list?type=${data.type}&sampleCode=${data.sampleCode || ""}&pageNo=${data.pageNo}&pageSize=${data.pageSize}`,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

let getReportDetail  = function(ctx,data){
    if(data.type && data.type == 7){
        return fetch({ 
            method: 'get',
            url: `menhu/mhReport/getRepairByShibeiCode?code=${data.id}`,
            headers:{
                "token": ctx.cookies.get('gxtoken')
            },
            body:data
        })
    }else{
        return fetch({ 
            method: 'get',
            url: 'menhu/mhReport/getBySampleCode?code=' + data.id,
            headers:{
                "token": ctx.cookies.get('gxtoken')
            },
            body:data
        })
    }
    
}

module.exports = {
    getReportList,
    getReportDetail
}

