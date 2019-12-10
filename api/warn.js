const fetch = require('./utils');

//消费争议
let getWarnList = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: `menhu/mhDispute/list?pageNo=${data.pageNo}&pageSize=${data.pageSize}`,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}
//失信黑名单
let getShixinList = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: `menhu/mhBlacklist/list?pageNo=${data.pageNo}&pageSize=${data.pageSize}`,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

//失信黑名单
let getShixiDetail = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhBlacklist/queryById?id=' + data.id,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}


//在线投诉
let getTousuList = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: `menhu/mhComplain/list?pageNo=${data.pageNo}&pageSize=${data.pageSize}`,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

let getTousuDetail = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhComplain/queryById?id=' + data.id,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

let getWarnDetail  = function(ctx,data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhDispute/queryById?id=' + data.id,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        }
    })
}

module.exports = {
    getWarnList,
    getShixinList,
    getTousuList,
    getShixiDetail,
    getTousuDetail,
    getWarnDetail
}

