const request = require('request')

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
            headers: Object.assign({
                'User-Agent': ctx.headers&&ctx.headers["user-agent"] || 'node',
                "content-type": "application/json",
                "source": "pc",
                "version": "2.0",
                "token": token
            }, options.headers),
            json: true,
            uri: url,
            body:options.body
        }
        request(def, function (error, response, body) {
            resolve(body)
        });
    })
}

const fetchAll = function(){
    return Promise.all(arguments)
}
module.exports = fetch;
