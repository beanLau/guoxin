const fetch = require('./utils');

// 通知公告
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

// 行业信息
let getHangyeList = function(ctx,data){
    return fetch({ 
        method: 'POST',
        url: 'menhu/mhNotice/hangyeList',
        headers:{
            "token": ctx.cookies.get('yfpctoken')
        },
        body:data
    })
}

// 技术文献
let getTecDocList = function(ctx,data){
    return fetch({ 
        method: 'POST',
        url: 'menhu/mhNotice/tecDocList',
        headers:{
            "token": ctx.cookies.get('yfpctoken')
        },
        body:data
    })
}


module.exports = {
    getNoticeList,
    getHangyeList,
    getTecDocList
}

