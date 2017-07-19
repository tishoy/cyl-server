const router = require('koa-router')()

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     test: 'Oh It’s Working!'
//   })
// })

router.get('/test', async (ctx, next) => {
  ctx.body = 'Oh It’s Working!'
})

router.get('/router', async (ctx, next) => {
  console.log(ctx.request)
  console.log(ctx.request.body)
  ctx.body = {
    "users/login": "http://localhost:3008/users/login",
    regist: "http://localhost:3008/users/regist"
  }
})

module.exports = router
