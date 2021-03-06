const router = require('koa-router')()

const Code = require('../code')

router.prefix('/enrolled')

/**
 * 报名接口
 * request {session, id:Int}
 * response {code}
 */
router.post('/enroll', async (ctx, next) => {
  let req = ctx.request.body
  ctx.body = {
    code: Code.LOGIC_SUCCESS,
  }
})

/**
 * 同意安排
 * request {sesion, id:Int}
 * response {code}
 */
router.post('/agree', async (ctx, next) => {
  let req = ctx.request.body
  ctx.body = {
    code: Code.LOGIC_SUCCESS,
  }
})

/**
 * 拒绝安排
 * request {session, id:Int}
 * response {code}
 */
router.post('/refuse', async (ctx, next) => {
  let req = ctx.request.body
  ctx.body = {
    code: Code.LOGIC_SUCCESS,
  }
})

module.exports = router
