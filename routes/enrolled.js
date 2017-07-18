const router = require('koa-router')()

router.prefix('/enrolled')

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
