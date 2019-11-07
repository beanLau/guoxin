const router = require('koa-router')();

router.get('/list', async (ctx) => {
    ctx.body = '你好，这里是列表页！'
})
module.exports = router




