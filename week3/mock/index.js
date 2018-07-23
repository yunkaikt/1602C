var list = require("./data.js")
var train = require("./list.js")
    // 接口的开放
module.exports = function(app) {
    app.get("/api/data", function(req, res, next) {
        res.send(train)
    })

}