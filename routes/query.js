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
    } else if (req.collection === "student" && req.sentence === "{}") {
        let result = [
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
            }
        ]
            ;
    }

    ctx.body = {
        code: Code.LOGIC_SUCCESS,
        student: result
    }
})


module.exports = router
