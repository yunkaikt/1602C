var list = require("./data.js")
var city = require("./city.js")
var provinceCity = require("./provinceCity.js")
    // 接口的开放
module.exports = function(app) {
    app.get("/api/data", function(req, res, next) {
        res.send(list)
    })
    app.get("/api/city", function(req, res, next) {
        res.send(city)
    })
    app.get("/api/provinceCity", function(req, res, next) {
        res.send(provinceCity)
    })
}