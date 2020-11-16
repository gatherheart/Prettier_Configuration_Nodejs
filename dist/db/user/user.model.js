"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true }
});
exports["default"] = mongoose.model('User', UserSchema);
//# sourceMappingURL=user.model.js.map