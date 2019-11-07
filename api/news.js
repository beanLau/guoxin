const fetch = require('./utils');

// 获取资讯类型
let getInformationTypeList = function(ctx){
    return fetch({ 
        method: 'POST',
        url: 'Information/getInformationTypeList',
        headers:{
            "token": ctx.cookies.get('yfpctoken')
        }
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
    getInformationTypeList,
    getInformationPageList
}

