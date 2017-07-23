const router = require('koa-router')()

const Code = require('../code')

router.prefix('/users')

/**
 * 用户名可用接口
 * request {account:String, password:String, type:Int}
 * response {code}
 */
router.post('/available', function (ctx, next) {
  let req = ctx.request.body
  console.log(ctx.request)
  if (req.account === "tishoy" && req.password === "hantishoy123" && req.type === 1) {
    ctx.body = { code: Code.LOGIC_SUCCESS, session: "tishoy_1_training" }
  } else {
    ctx.body = { code: 10001, session: "" }
  }
})

/**
 * 注册接口
 * request {account:String, password:String, type:Int}
 * response {code}
 */
router.post('/register', function (ctx, next) {
  let req = ctx.request.body
  console.log(ctx.request)
  if (req.account === "tishoy" && req.password === "hantishoy123" && req.type === 1) {
    ctx.body = { code: Code.LOGIC_SUCCESS, session: "tishoy_1_training" }
  } else {
    ctx.body = { code: 10001, session: "", students: [] }
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
    ctx.body = {
      code: Code.LOGIC_SUCCESS, session: "tishoy_1_training", students: [
        {
          "base_info": {
            "name": "tishoy",
            "tel": "13810100010",
            "email": "tishoy",
            "city": "北京",
            "level": "中级",
            "company": "中软"
          },
          "personal_info": {
            "licence": "232700198902230021",
            "edu": "QH University",
            "working_time": "5 year",
            "total_amount": "",
            "soft_amount": ""
          },
          "proj_exp": [
            {
              "id": "",
              "name": "",
              "time": "",
              "actor": "",
              "total_amount": "",
              "soft_amount": ""
            },
            {
              "id": "",
              "name": "",
              "time": "",
              "actor": "",
              "total_amount": "",
              "soft_amount": ""
            },
            {
              "id": "",
              "name": "",
              "time": "",
              "actor": "",
              "total_amount": "",
              "soft_amount": ""
            }
          ],
          // 状态 0 未进行 1 进行中 2 进行结束
          "status": {
            "enrolled": {
              "status": 1,
              "time": 1500262255
            },
            "arranged": {
              "status": 1,
              "time": 1500262255
            },
            "agreed": {
              "status": 1,
              "time": 1500262255
            },
            "examing": {
              "status": 1,
              "time": 1500262255
            },
            "passed": {
              "status": 1,
              "score": 96,
              "time": 1500262255
            },
            "retry": {
              "status": 1,
              "time": 1500262255
            }
          }
        },
      ]
    }
  } else {
    ctx.body = { code: 10001, session: "", students: [] }
  }
})

/**
 * 获取用户信息接口
 * request {session, base:1, finance:1, express:1, admin:1}
 * response {code, data:JSON}
 */
router.post('/info', function () {
  let req = ctx.request.body
  console.log(ctx.request)
  if (req.base !== undefined) {
    ctx.body = {
      code: Code.LOGIC_SUCCESS,
      data: {

      }
    }
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
