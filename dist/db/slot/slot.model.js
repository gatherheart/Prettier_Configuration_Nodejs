"use strict";
exports.__esModule = true;
exports.SlotSchema = void 0;
var mongoose = require("mongoose");
exports.SlotSchema = new mongoose.Schema({
    bizItemId: { type: String, required: true },
    slotMapId: { type: String, required: true },
    number: { type: String, required: true },
    view: { type: String, "default": 'rect,0.0,0.0,10.0,10.0,0.0' },
    status: { type: String, "enum": ['FREE', 'OCCUPIED', 'SOLD'], "default": 'FREE', required: true },
    typeName: { type: String, required: true }
});
exports.SlotSchema.index({ bizItemId: 1, slotMapId: 1, number: 1 }, { unique: true });
exports["default"] = mongoose.model('Slot', exports.SlotSchema);
//# sourceMappingURL=slot.model.js.map