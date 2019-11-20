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

// 技术文献
let getTecDocList = function(ctx,data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhNotice/tecDocList',
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

// 通用标准
let getRuleList = function(ctx,data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhNotice/ruleList',
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

// 考核标准
let getKhbzList = function(ctx,data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhNotice/khbzList',
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

// 合作单位
let getCompanyList = function(ctx,data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhHezuoOrg/list',
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}


module.exports = {
    getNoticeList,
    getHangyeList,
    getTecDocList,
    getCompanyList,
    getRuleList,
    getKhbzList
}

