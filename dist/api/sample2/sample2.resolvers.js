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
var slot_controller_1 = require("../../controller/slot/slot.controller");
var resolvers = {
    Query: {
        sample2: function (_, _a) {
            var slotId = _a.slotId;
            return __awaiter(void 0, void 0, void 0, function () {
                var foundSlot;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, slot_controller_1.findSlotById({ slotId: slotId })];
                        case 1:
                            foundSlot = _b.sent();
                            if (foundSlot)
                                return [2 /*return*/, { error: false, slot: foundSlot }];
                            else
                                return [2 /*return*/, { error: true, errorMessage: 'Not Found User' }];
                            return [2 /*return*/];
                    }
                });
            });
        }
    },
    Mutation: {
        sample2: function (_, _a) {
            var slotId = _a.slotId, position = _a.position, typeName = _a.typeName;
            return __awaiter(void 0, void 0, void 0, function () {
                var createdSlot, err_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, slot_controller_1.createSlot({ slotId: slotId, position: position, typeName: typeName })];
                        case 1:
                            createdSlot = _b.sent();
                            void createdSlot.save();
                            return [2 /*return*/, { error: false, slot: createdSlot }];
                        case 2:
                            err_1 = _b.sent();
                            return [2 /*return*/, { error: true, errorMessage: 'Already Existing uid or userName' }];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
    }
};
exports["default"] = resolvers;
//# sourceMappingURL=sample2.resolvers.js.map