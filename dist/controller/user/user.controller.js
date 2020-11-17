"use strict";
exports.__esModule = true;
exports.findUserById = exports.createUser = void 0;
var user_model_1 = require("../../db/user/user.model");
var database_1 = require("../../db/database");
function createUser(_a) {
    var uid = _a.uid, email = _a.email, userName = _a.userName;
    return user_model_1["default"].create({
        uid: uid,
        email: email,
        userName: userName
    })
        .then(function (data) {
        return data;
    })["catch"](function (error) {
        throw error;
    });
}
exports.createUser = createUser;
function findUserById(_a) {
    var uid = _a.uid;
    return new Promise(function (resolve, reject) {
        database_1.redis.get(uid, function (err, reply) {
            if (err) {
                return reject(err);
            }
            else if (reply) {
                var foundUser = JSON.parse(reply);
                resolve(foundUser);
            }
            else {
                user_model_1["default"].findOne({
                    uid: uid
                })
                    .then(function (foundUser) {
                    database_1.redis.set(foundUser.uid, JSON.stringify(foundUser));
                    resolve(foundUser);
                })["catch"](function (error) {
                    throw error;
                });
            }
        });
    });
}
exports.findUserById = findUserById;
//# sourceMappingURL=user.controller.js.map