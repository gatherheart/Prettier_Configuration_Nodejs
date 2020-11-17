"use strict";
exports.__esModule = true;
exports.createManySlots = exports.findSlotById = exports.createSlot = void 0;
var slot_model_1 = require("../../db/slot/slot.model");
var database_1 = require("../../db/database");
var slot_interface_1 = require("../../interface/slot/slot.interface");
function createSlot(_a) {
    var slotId = _a.slotId, view = _a.view, typeName = _a.typeName;
    return slot_model_1["default"].create({
        slotId: slotId,
        view: view,
        state: slot_interface_1.SlotState.FREE,
        typeName: typeName
    })
        .then(function (data) {
        return data;
    })["catch"](function (error) {
        throw error;
    });
}
exports.createSlot = createSlot;
function createManySlots(slotInfos) {
    return slot_model_1["default"].insertMany(slotInfos)
        .then(function (data) {
        return data;
    })["catch"](function (error) {
        throw error;
    });
}
exports.createManySlots = createManySlots;
function findSlotById(_a) {
    var slotId = _a.slotId;
    return new Promise(function (resolve, reject) {
        database_1.redis.hget(slot_model_1.SLOT_HASH_MAP_KEY, slotId, function (err, reply) {
            if (err) {
                return reject(err);
            }
            else if (reply) {
                var foundSlot = JSON.parse(reply);
                resolve(foundSlot);
            }
            else {
                slot_model_1["default"].findOne({
                    slotId: slotId
                })
                    .then(function (foundSlot) {
                    database_1.redis.hset(slot_model_1.SLOT_HASH_MAP_KEY, slotId, JSON.stringify(foundSlot));
                    resolve(foundSlot);
                })["catch"](function (error) {
                    throw error;
                });
            }
        });
    });
}
exports.findSlotById = findSlotById;
//# sourceMappingURL=slot.controller.js.map