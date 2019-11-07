const fetch = require('./utils');

// 获取资讯详情
let getInformation = function(ctx,body){
    return fetch({ 
        method: 'POST',
        url: 'Information/getInformation',
        headers:{
            "token": ctx.cookies.get('yfpctoken')
        },
        body:body
    })
}

// 随机获取资讯
let getRandomGetInformationList = function(ctx){
    return fetch({ 
        method: 'POST',
        url: 'Information/randomGetInformationList',
        headers:{
            "token": ctx.cookies.get('yfpctoken')
        }
    })
}

module.exports = {
    getInformation,
    getRandomGetInformationList
}

