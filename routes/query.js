const router = require('koa-router')()

const Code = require('../code')

const ALL_DATA = require('./data')

router.prefix('/query')

/**
 * 查询接口
 * request {session, collection:String, sentence:JSON}
 * response {code}
 */
router.post('/', async (ctx, next) => {
    let req = ctx.request.body

    ctx.body = {
        code: Code.LOGIC_SUCCESS,
        data: ALL_DATA
    }

})


module.exports = router
