"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var BizItemSchema = new mongoose.Schema({
    businessId: { type: String, required: true },
    bizItemId: { type: String, required: true },
    slotMapId: { type: [String] }
});
exports["default"] = mongoose.model('BizItem', BizItemSchema);
//# sourceMappingURL=bizItem.model.js.map