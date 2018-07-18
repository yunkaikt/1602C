var Mock = require("mockjs")

var Random = Mock.Random
var color = ["red", "green", "yellow"]
var list = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-100': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'price': Math.ceil(Math.random() * 9),
        'name': "@cname",
        'addr': "@city",
        "content": "@cparagraph",
        "img": Random.image('200x100', color[Math.floor(Math.random() * 2)]),
        "time": "@datetime"
    }]
})

module.exports = list