const fetch = require('./utils');

// 获取资讯类型
let getNoticeList = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhNotice/noticeList',
        headers:{
            "token": ctx.cookies.get('yfpctoken')
        },
        body:data
    })
}

// 分页获取资讯列表
let getInformationPageList = function(ctx,data){
    return fetch({ 
        method: 'POST',
        url: 'Information/getInformationPageList',
        headers:{
            "token": ctx.cookies.get('yfpctoken')
        },
        body:data
    })
}


module.exports = {
    getNoticeList,
    getInformationPageList
}

