const fetch = require('./utils');

// 技术文献
let getTecDocList = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: `menhu/mhNotice/tecDocList?pageNo=${data.pageNo}&pageSize=${data.pageSize}`,
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
        url: `menhu/mhNotice/ruleList?pageNo=${data.pageNo}&pageSize=${data.pageSize}`,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

// 考核标准-
let getKhbzList = function(ctx,data){
    return fetch({ 
        method: 'POST',
        url: `menhu/mhNotice/khbzList?pageNo=${data.pageNo}&pageSize=${data.pageSize}`,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}


module.exports = {
    getRuleList,
    getKhbzList,
    getTecDocList
}

