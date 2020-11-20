"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var SlotMapSchema = new mongoose.Schema({
    bizItemId: { type: String, required: true },
    slotMapId: { type: String, required: true },
    slots: [{ type: mongoose.Types.ObjectId, ref: 'Slot' }]
});
SlotMapSchema.index({ bizItemId: 1, slotMapId: 1 }, { unique: true });
exports["default"] = mongoose.model('SlotMap', SlotMapSchema);
//# sourceMappingURL=slotMap.model.js.map