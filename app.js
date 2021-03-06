const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')
const convert = require('koa-convert')
const mongo = require('koa-mongo')

const index = require('./routes/index')
const users = require('./routes/users')
const exams = require('./routes/exams')
const students = require('./routes/students')
const enrolled = require('./routes/enrolled')
const clazz = require('./routes/clazz')
const query = require('./routes/query')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(convert(cors()))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
// app.use(mongo())

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(exams.routes(), exams.allowedMethods())
app.use(students.routes(), students.allowedMethods())
app.use(enrolled.routes(), enrolled.allowedMethods())
app.use(clazz.routes(), clazz.allowedMethods())
app.use(query.routes(), query.allowedMethods())

module.exports = app
