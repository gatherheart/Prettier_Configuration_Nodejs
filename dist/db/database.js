"use strict";
exports.__esModule = true;
exports.disconnect = exports.connect = exports.redis = void 0;
var Mongoose = require("mongoose");
var Redis = require("redis");
var redisClient = Redis.createClient;
exports.redis = redisClient(6379, 'localhost');
var database;
exports.connect = function () {
    var uri = process.env.MONGO_URI;
    console.log(uri);
    if (database) {
        return;
    }
    void Mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    database = Mongoose.connection;
    database.once('open', function () {
        console.log('Connected to database');
    });
    database.on('error', function () {
        console.log('Error connecting to database');
    });
    exports.redis.on('connect', function () {
        console.log('connected to Redis');
    });
};
exports.disconnect = function () {
    if (!database) {
        return;
    }
    void Mongoose.disconnect();
};
//# sourceMappingURL=database.js.map