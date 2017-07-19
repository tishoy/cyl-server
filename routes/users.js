const router = require('koa-router')()

const Code = require('../code')

router.prefix('/users')

/**
 * 登录接口
 * request {account:String, password:String, type:Int}
 * response {code, session}
 */
router.post('/login', function (ctx, next) {
  let req = ctx.request.body
  console.log(ctx.request)
  if (req.account === "tishoy" && req.password === "hantishoy123" && req.type === "company") {
    ctx.body = { code: 0, session: "tishoy_1_training" }
  } else {
    ctx.body = { code: 10001, session: "" }
  }
})

/**
 * 重置用户信息接口
 * request {session, base:JSON, finance:JSON, express:JSON, admin:JSON}
 * response {code}
 */
router.post('/reset', function () {
  let req = ctx.request.body
  console.log(ctx.request)
  if (req.base !== undefined) {
    ctx.body = { code: 0 }
  }
  if (req.finance !== undefined) {
    ctx.body = { code: 0 }
  }
  if (req.express !== undefined) {
    ctx.body = { code: 0 }
  }
  if (req.admin !== undefined) {
    ctx.body = { code: 0 }
  }
  ctx.body = { code: Code.ERROR_PARAM_KEY }
})

module.exports = router
