const router = require('koa-router')()

const Code = require('../code')

router.prefix('/clazz')

/**
 * 设立新班级
 * request {session, id:Int, clazz:JSON}
 * response {code}
 */
router.post('/new', async (ctx, next) => {
  let req = ctx.request.body
  ctx.body = {
    code: Code.LOGIC_SUCCESS
  }
})

/**
 * 安排考试
 * request {session, id:Int, exam:}
 * response {code}
 */
router.post('/examing', async (ctx, next) => {
  let req = ctx.request.body
  ctx.body = {
    title: 'koa2 json'
  }
})

/**
 * 重置用户信息接口
 * request {session, id:Int, self:JSON}
 * response {code}
 */
router.post('/pass', async (ctx, next) => {
  let req = ctx.request.body
  ctx.body = {
    title: 'koa2 json'
  }
})

/**
 * 重置用户信息接口
 * request {session, id:Int, self:JSON}
 * response {code}
 */
router.post('/retry', async (ctx, next) => {
  let req = ctx.request.body
  ctx.body = {
    title: 'koa2 json'
  }
})

/**
 * 重置用户信息接口
 * request {session, id:Int, self:JSON}
 * response {code}
 */
router.post('/score', async (ctx, next) => {
  let req = ctx.request.body
  ctx.body = {
    title: 'koa2 json'
  }
})

/**
 * 重置用户信息接口
 * request {session, id:Int, self:JSON}
 * response {code}
 */
router.post('/over', async (ctx, next) => {
  let req = ctx.request.body
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
