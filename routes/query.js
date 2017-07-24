const router = require('koa-router')()

const Code = require('../code')

router.prefix('/query')

/**
 * 查询接口
 * request {session, collection:String, sentence:JSON}
 * response {code}
 */
router.post('/', async (ctx, next) => {
    let req = ctx.request.body
    if (req.collection === "student") {
        // mongo 前端根据需求发送搜索内容
        let result = db[req.collection].find(req.sentence)
    }

    ctx.body = {
        code: Code.LOGIC_SUCCESS,
        data: result
    }
})


module.exports = router
