const Koa = require('koa')
const koaBody = require('koa-body')
const Router = require('koa-router')
const views = require('koa-views')
const router = new Router()
const app = new Koa()

const index = require('./routes/index')
const orgdesc = require('./routes/orgdesc')
const news = require('./routes/news')
const newsDetail = require('./routes/newsdetail')
const public = require('./routes/public')
const report = require('./routes/report')

const literature = require('./routes/literature')
const warn = require('./routes/warn')


app.use(views('views', {
    root: __dirname + '/views',
    extension: 'jade'
}));

app.use(koaBody())

app.use(require('koa-static')(__dirname + '/public'));

app.use(index.routes()).use(index.allowedMethods())
app.use(orgdesc.routes()).use(orgdesc.allowedMethods())
app.use(news.routes()).use(news.allowedMethods())
app.use(newsDetail.routes()).use(newsDetail.allowedMethods())
app.use(public.routes()).use(public.allowedMethods())
app.use(report.routes()).use(report.allowedMethods())

app.use(literature.routes()).use(literature.allowedMethods())
app.use(warn.routes()).use(warn.allowedMethods())

module.exports = app