const fetch = require('./utils');

// 技术文献
let getTecDocList = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhNotice/tecDocList',
        headers:{
            "token": ctx.cookies.get('yfpctoken')
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
            "token": ctx.cookies.get('yfpctoken')
        },
        body:data
    })
}

// 考核标准-
let getKhbzList = function(ctx,data){
    return fetch({ 
        method: 'POST',
        url: 'menhu/mhNotice/khbzList',
        headers:{
            "token": ctx.cookies.get('yfpctoken')
        },
        body:data
    })
}


module.exports = {
    getRuleList,
    getKhbzList,
    getTecDocList
}

