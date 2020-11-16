"use strict";
exports.__esModule = true;
exports.SlotSchema = exports.SlotState = exports.SLOT_HASH_MAP_KEY = void 0;
var mongoose = require("mongoose");
exports.SLOT_HASH_MAP_KEY = 'slotHashMap';
var SlotState;
(function (SlotState) {
    SlotState["FREE"] = "FREE";
    SlotState["OCCUPIED"] = "OCCUPIED";
    SlotState["SOLD"] = "SOLD";
})(SlotState = exports.SlotState || (exports.SlotState = {}));
var PositionSchema = new mongoose.Schema({
    x: { type: Number, "default": 0 },
    y: { type: Number, "default": 0 },
    angle: { type: Number, "default": 0 }
}, { _id: false });
exports.SlotSchema = new mongoose.Schema({
    slotId: { type: String, required: true },
    position: { type: PositionSchema, "default": { x: 0, y: 0, angle: 0 } },
    state: { type: String, "enum": ['FREE', 'OCCUPIED', 'SOLD'], "default": 'FREE', required: true },
    typeName: { type: String, required: true }
});
exports["default"] = mongoose.model('Slot', exports.SlotSchema);
//# sourceMappingURL=slot.model.js.map