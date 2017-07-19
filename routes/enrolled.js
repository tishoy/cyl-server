const router = require('koa-router')()

const Code = require('../code')

router.prefix('/enrolled')

router.post('/arrange', async (ctx, next) => {
  let req = ctx.request.body
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/agree', async (ctx, next) => {
  let req = ctx.request.body
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/refuse', async (ctx, next) => {
  let req = ctx.request.body
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
