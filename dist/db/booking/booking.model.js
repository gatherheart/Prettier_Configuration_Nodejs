"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var BookingDetailSchema = new mongoose.Schema({
    bizItemId: { type: String },
    slotIds: { type: [String] }
});
var BookingSchema = new mongoose.Schema({
    bookingId: { type: Number, required: true },
    booking: { type: BookingDetailSchema },
    createdAt: { type: Date, "default": Date.now }
});
exports["default"] = mongoose.model('Booking', BookingSchema);
//# sourceMappingURL=booking.model.js.map