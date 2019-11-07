const Koa = require('koa')
const koaBody = require('koa-body')
const Router = require('koa-router')
const views = require('koa-views')
const router = new Router()
const app = new Koa()

const index = require('./routes/index')
const list = require('./routes/list')
const course = require('./routes/course')
const news = require('./routes/news')
const newsDetail = require('./routes/news_detail')
const evaluation = require('./routes/evaluation')
const evaluationDetail = require('./routes/evaluation_detail')


app.use(views('views', {
    root: __dirname + '/views',
    extension: 'jade'
}));

app.use(koaBody())

app.use(require('koa-static')(__dirname + '/public'));

app.use(index.routes()).use(index.allowedMethods())
app.use(list.routes()).use(list.allowedMethods())
app.use(course.routes()).use(course.allowedMethods())
app.use(news.routes()).use(news.allowedMethods())
app.use(newsDetail.routes()).use(newsDetail.allowedMethods())
app.use(evaluation.routes()).use(evaluation.allowedMethods())
app.use(evaluationDetail.routes()).use(evaluationDetail.allowedMethods())

module.exports = app