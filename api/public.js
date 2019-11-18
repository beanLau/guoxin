const fetch = require('./utils');

// 获取信息公开列表
let getPublicList = function(ctx, data){
    let opt = `?pageNo=${data.pageNo || 1}&pageSize=${data.pageSize || 10}&type=${data.type || 1}`
    return fetch({ 
        method: 'get',
        url: 'menhu/mhOrgsite/list' + opt,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        }
    })
}

// 获取信息公开详情
let getPublicDetail = function(ctx,data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhOrgsite/queryById?id=' + data.id,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        }
    })
}

module.exports = {
    getPublicList,
    getPublicDetail
}