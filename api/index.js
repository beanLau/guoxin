const fetch = require('./utils')

module.exports = {
    // 获取验证码
    getCode: function (ctx) {
        return fetch({
            method: 'POST',
            url: 'login/sendSmsCode',
            body: ctx.request.body
        }, ctx)
    },
    //立即报名调用快捷登录接口
    quickLogin: function (ctx) {
        return fetch({
            method: 'POST',
            url: 'login/tellogin',
            body: ctx.request.body
        }, ctx)
    },
    loginout: function (ctx) {
        let yfpcdata = ctx.cookies.get('yfpcdata') || '{}'
        yfpcdata = decodeURIComponent(yfpcdata)
        yfpcdata = JSON.parse(yfpcdata)
        return fetch({
            method: 'POST',
            url: 'login/loginout',
            headers: {
                "token": yfpcdata.token || ""
            },
            body: ctx.request.body
        }, ctx)
    }
}