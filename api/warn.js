const fetch = require('./utils');


let getWarnList = function(ctx, data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhComplain/list',
        headers:{
            "token": ctx.cookies.get('gxtoken')
        },
        body:data
    })
}

let getWarnDetail  = function(ctx,data){
    return fetch({ 
        method: 'get',
        url: 'menhu/mhComplain/queryById?id=' + data.id,
        headers:{
            "token": ctx.cookies.get('gxtoken')
        }
    })
}

module.exports = {
    getWarnList,
    getWarnDetail
}

