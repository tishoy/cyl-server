const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.post('/post', async (ctx, next) => {
  console.log(ctx.request)
  console.log(ctx.request.body)
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/json', async (ctx, next) => {
  console.log(ctx.request)
  console.log(ctx.request.body)
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
