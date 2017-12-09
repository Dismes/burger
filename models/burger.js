var orm = require("../config/orm.js");


var burger = {
    selectOne: function (cb) {
        orm.selectOne("burger", function (res) {
            cb(res);
        })
    },
    insertOne: function (cb) {
        orm.insertOne("burger", cols, vals, function (res) {
            cb(res);
        })
    },
    updateOne:function(objColVals, condition, cb) {
        orm.update("burger", objColVals, condition, function(res) {
          cb(res);
        })
    }
}

module.exports = burger;