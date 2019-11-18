const fetch = require('./utils');

// 通知公告
let getNoticeList = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhNotice/noticeList',
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

// 行业信息
let getHangyeList = function(ctx,data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhNotice/hangyeList',
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

let getNewsDetail  = function(ctx,data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhNotice/detailById?id=' + data.id,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

module.exports = {
    getNoticeList,
    getHangyeList,
    getNewsDetail
}

