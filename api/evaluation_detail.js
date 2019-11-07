const fetch = require('./utils');

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

// 获取试题列表
let getEvalQuestionList = function(ctx,data){
    let token = JSON.parse(decodeURIComponent(ctx.cookies.get('yfpcdata'))).token;
    return fetch({ 
        method: 'POST',
        url: 'eval/pcGetEvalQuestionList',
        headers:{
            "token": token
        },
        body:data
    })
}

// 提交试题
let SubmitQuestion = function(ctx,data){
    let token = JSON.parse(decodeURIComponent(ctx.cookies.get('yfpcdata'))).token;
    return fetch({ 
        method: 'POST',
        url: 'eval/pcSubmitQuestion',
        headers:{
            "token": token
        },
        body:data
    })
}



module.exports = {
    getRandomGetInformationList,
    getEvalQuestionList,
    SubmitQuestion
}

