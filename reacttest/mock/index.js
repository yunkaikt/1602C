var list = require("./data.js")
var bodyParser = require("body-parser")
    // 接口的开放
module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.get("/api/data", function(req, res, next) {
        res.send(list)
    })
    app.post("/api/data1", function(req, res, next) {
        res.send({
            obj: {
                name: "zhangsan",
                age: 20,
                love: ["篮球", "足球"]
            }
        })
    })

    app.get("/api/id", function(req, res, next) {
        console.log(1111)
        res.send({
            code: "1001",
            msg: "请求id成功",
            data: {
                id: "1"
            }
        })
    })

    app.post("/api/detail", function(req, res, next) {
        let { id } = req.body
        console.log(req.body)
        let data = null
        let state = list.list.some((i) => {
            if (i.id == id) {
                data = i
                return true
            } else {
                return false
            }
        })

        if (state) {
            setTimeout(() => {
                res.send({
                    code: "1002",
                    msg: "数据查找成功",
                    data: data
                })
            }, 2000)
        }
    })


    app.get("/api/id1", function(req, res, next) {
        console.log(1111)
        res.send({
            code: "1001",
            msg: "请求id成功",
            data: {
                id1: "1"
            }
        })
    })
    app.post("/api/detail1", function(req, res, next) {
        let { id1 } = req.body
        console.log(req.body)
        let data = null
        let state = list.list.some((i) => {
            if (i.id == id1) {
                data = i
                return true
            } else {
                return false
            }
        })

        if (state) {
            res.send({
                code: "1002",
                msg: "数据查找成功",
                data: data
            })
        }
    })
    app.get("/api/carClass", function(req, res, next) {

        res.send({
            code: "1001",
            msg: "请求id成功",
            data: require("./carClass")
        })
    })

    app.get("/api/num", function(req, res, next) {
        res.send({
            code: 3001,
            msg: "ok",
            data: 1
        })
    })

}