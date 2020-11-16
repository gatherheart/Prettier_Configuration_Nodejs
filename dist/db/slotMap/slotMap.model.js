"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var SlotMapSchema = new mongoose.Schema({
    slotMapId: { type: [String], required: true, unique: true },
    slotIds: { type: [String], required: true }
});
exports["default"] = mongoose.model('SlotMap', SlotMapSchema);
//# sourceMappingURL=slotMap.model.js.map