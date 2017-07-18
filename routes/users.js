const router = require('koa-router')()

router.prefix('/users')

router.post('/login', function (ctx, next) {
  let req = ctx.request.body
  console.log(req.account)
  console.log(req.session)
  console.log(req.password)
  if (req.account === "tishoy" && req.session === "tishoy_1_training") {
    ctx.body = { code: 0, session: "tishoy_1_training" }
  }
  if (req.account === "tishoy" && req.password === "hantishoy123") {
    ctx.body = { code: 0, session: "tishoy_1_training" }
  } else {
    ctx.body = { code: 10001 }
  }
})

router.post('/reset', function () {
  let req = ctx.request.body
  console.log(ctx.request)
  if (req.account == "tishoy") {

  }
})


// router.post()

module.exports = router
