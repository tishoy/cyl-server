const router = require('koa-router')()

const Code = require('../code')

router.prefix('/users')

/**
 * 注册接口
 * request {account:String, password:String, type:Int}
 * response {code}
 */
router.post('/regist', function (ctx, next) {
  let req = ctx.request.body
  console.log(ctx.request)
  if (req.account === "tishoy" && req.password === "hantishoy123" && req.type === 1) {
    ctx.body = { code: Code.LOGIC_SUCCESS, session: "tishoy_1_training" }
  } else {
    ctx.body = { code: 10001, session: "" }
  }
})

/**
 * 登录接口
 * request {account:String, password:String, type:Int}
 * response {code, session}
 */
router.post('/login', function (ctx, next) {
  let req = ctx.request.body
  console.log(ctx.request)
  if (req.account === "tishoy" && req.password === "hantishoy123" && req.type === 1) {
    ctx.body = { code: Code.LOGIC_SUCCESS, session: "tishoy_1_training" }
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
    ctx.body = { code: Code.LOGIC_SUCCESS }
  }
  if (req.finance !== undefined) {
    ctx.body = { code: Code.LOGIC_SUCCESS }
  }
  if (req.express !== undefined) {
    ctx.body = { code: Code.LOGIC_SUCCESS }
  }
  if (req.admin !== undefined) {
    ctx.body = { code: Code.LOGIC_SUCCESS }
  }
  ctx.body = { code: Code.ERROR_PARAM_KEY }
})

module.exports = router
