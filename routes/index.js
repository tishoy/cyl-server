const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    test: 'Oh It’s Working!'
  })
})

router.get('/test', async (ctx, next) => {
  ctx.body = 'Oh It’s Working!'
})

router.post('/', async (ctx, next) => {
  console.log(ctx.request)
  console.log(ctx.request.body)
  ctx.body = {
    your_word: ctx.request.body
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
