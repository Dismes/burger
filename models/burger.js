var orm = require("../config/orm.js");


var burger = {
    selectOne: function (cb) {
        orm.selectOne(function (res) {
            cb(res);
        })
    },
    insertOne: function(cb){
        orm.insertOne(function(res){
            cb(res);
        })
    },
    updateOne: function(cb){
        orm.updateOne(function(res){
            cb(res);
        })
    }
}

module.exports = burger;