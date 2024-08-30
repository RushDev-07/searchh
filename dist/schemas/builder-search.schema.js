"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderSearchSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BuilderSearchSchema = new mongoose_1.Schema({
    builderId: { type: String, required: true },
    builderName: { type: String, required: true },
    projectId: { type: String, required: true },
    projectName: { type: String, required: true },
    projectRera: { type: String, required: true },
    brokerId: { type: String, required: true },
    brokerName: { type: String, required: true },
    brokerRera: { type: String, default: '' },
    _createdDate: { type: Date, default: Date.now },
    _updatedDate: { type: Date, default: Date.now },
});
//# sourceMappingURL=builder-search.schema.js.map