const router = require('koa-router')()

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     test: 'Oh It’s Working!'
//   })
// })

router.get('/test', async (ctx, next) => {
  ctx.body = 'Oh It’s Working!'
})

router.post('/routes', async (ctx, next) => {
  console.log(ctx.request)
  console.log(ctx.request.body)
  let addr = "http://localhost:3008/"
  ctx.body = {
    "login": addr + "users/login",
    "register": addr + "users/regist",
    "available": addr + "users/available",
    "reset": addr + "users/reset",
    "detail": addr + "users/detail",

    "insert": addr + "students/insert",
    "remove": addr + "students/remove",
    "base": addr + "students/base",
    "self": addr + "students/self",
    "addexp": addr + "students/addexp",
    "delexp": addr + "students/delexp",

    "examing": addr + "exams/examing",
    "pass": addr + "exams/pass",
    "retry": addr + "exams/retry",
    "score": addr + "exams/score",
    "over": addr + "exams/over",

    "enroll": addr + "enrolled/enroll",
    "agree": addr + "enrolled/agree",
    "refuse": addr + "enrolled/refuse",

    "new": addr + "clazz/new",
    "entrance": addr + "clazz/entrance",
    "exit": addr + "clazz/exit",
  }
})

module.exports = router
