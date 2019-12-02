const axios = require('axios')

// const apiUrl = "http://192.168.1.5/education-pc/"
const apiUrl = "http://39.105.127.212:8080/jeecg-boot/"
const fetch = function (options,ctx) {
    ctx = ctx || {}
    let token,url = options.url
    if (!url) {
        throw new Error('请传入uri地址')
    }
    if(url.indexOf('http') == -1){
        url = apiUrl + url
    }
    options.body = options.body || {}
    
    // if(typeof ctx.cookies.get('gxtoken') == 'object' && ctx.cookies.get('gxtoken').token){
    //     token = ctx.cookies.get('gxtoken').token
    // }
    return new Promise((resolve, reject) => {
        let def = {
            method: options.method || 'POST',
            headers: {
                "content-type": "application/json;charset=utf-8"
            },
            url: url,
            data: options.body
        }

        axios(def).then(res=>{
            resolve(res.data)
        }).catch((e)=>{
            reject({
                code: 0,
                data:{},
                msg: ""
            })
        })
    })
}

const fetchAll = function(){
    return Promise.all(arguments)
}
module.exports = fetch;
