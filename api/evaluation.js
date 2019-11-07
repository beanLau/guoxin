const fetch = require('./utils');
// 分页获取列表
let getEvalList = function(ctx,data){
    return fetch({ 
        method: 'POST',
        url: 'eval/pcGetEvalList',
        headers:{
            "token": ctx.cookies.get('yfpctoken')
        },
        body:data
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

// 检验是否登录
let checkLogin = function(ctx){
    let yfpcdata = ctx.cookies.get('yfpcdata') || '{}';
    let token = JSON.parse( decodeURIComponent(yfpcdata)).token;
    return fetch({ 
        method: 'POST',
        url: 'login/checkLogin',
        headers:{
            "token": token
        }
    })
}

module.exports = {
    getEvalList,
    getRandomGetInformationList,
    checkLogin
}

