"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.changeSlotStates = exports.getSlot = exports.getSlots = exports.createManySlots = void 0;
var slot_model_1 = require("../../db/slot/slot.model");
var slotMap_model_1 = require("../../db/slotMap/slotMap.model");
var slot_model_2 = require("../../db/slot/slot.model");
function createManySlots(slotInfos, _a) {
    var session = _a.session;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            return [2 /*return*/, slot_model_1["default"].create(slotInfos, { session: session })];
        });
    });
}
exports.createManySlots = createManySlots;
function getSlot(_a) {
    var bizItemId = _a.bizItemId, slotMapId = _a.slotMapId, number = _a.number;
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, slot_model_2["default"].findOne({ bizItemId: bizItemId, slotMapId: slotMapId, number: number })];
                case 1: return [2 /*return*/, _b.sent()];
                case 2:
                    err_1 = _b.sent();
                    throw new Error(err_1);
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getSlot = getSlot;
function getSlots(_a) {
    var bizItemId = _a.bizItemId, slotMapId = _a.slotMapId;
    return __awaiter(this, void 0, void 0, function () {
        var field, slotMap, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    field = { bizItemId: bizItemId, slotMapId: slotMapId };
                    return [4 /*yield*/, slotMap_model_1["default"].findOne(field).populate('slots')];
                case 1:
                    slotMap = _b.sent();
                    return [2 /*return*/, slotMap.slots];
                case 2:
                    err_2 = _b.sent();
                    throw new Error(err_2);
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getSlots = getSlots;
function changeSlotStates(_a) {
    var bizItemId = _a.bizItemId, slotMapId = _a.slotMapId, numbers = _a.numbers, status = _a.status;
    return __awaiter(this, void 0, void 0, function () {
        var slots, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, slot_model_2["default"].updateMany({ bizItemId: bizItemId, slotMapId: slotMapId, number: { $in: numbers } }, { $set: { status: status } })];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, getSlots({ bizItemId: bizItemId, slotMapId: slotMapId })];
                case 2:
                    slots = _b.sent();
                    return [2 /*return*/, slots];
                case 3:
                    err_3 = _b.sent();
                    throw new Error(err_3);
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.changeSlotStates = changeSlotStates;
//# sourceMappingURL=slot.controller.js.map