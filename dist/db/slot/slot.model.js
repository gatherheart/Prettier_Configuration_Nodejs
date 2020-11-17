"use strict";
exports.__esModule = true;
exports.SlotSchema = exports.SLOT_HASH_MAP_KEY = void 0;
var mongoose = require("mongoose");
exports.SLOT_HASH_MAP_KEY = 'slotHashMap';
exports.SlotSchema = new mongoose.Schema({
    slotId: { type: String, required: true, unique: true },
    view: { type: String, "default": 'rect,0.0,0.0,10.0,10.0,0.0' },
    state: { type: String, "enum": ['FREE', 'OCCUPIED', 'SOLD'], "default": 'FREE', required: true },
    typeName: { type: String, required: true }
});
exports["default"] = mongoose.model('Slot', exports.SlotSchema);
//# sourceMappingURL=slot.model.js.map