const fetch = require('./utils');

// 机构简介
let getOrgInfo = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhOrgInfo/orgInfo',
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

// 资质列表
let getZizhiList = function(ctx,data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhOrgInfo/list',
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

let getZizhiDetail = function(ctx,data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhOrgInfo/list',
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

module.exports = {
    getOrgInfo,
    getZizhiList
}