var list = require("./data.js")
    // 接口的开放
module.exports = function(app) {
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
}