const fetch = require('./utils');


let getWarnList = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhDispute/list',
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
    getWarnDetail
}

