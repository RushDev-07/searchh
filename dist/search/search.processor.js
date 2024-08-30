"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SearchProcessor = class SearchProcessor {
    constructor(builderSearchModel) {
        this.builderSearchModel = builderSearchModel;
    }
    async handleSaveProject(job) {
        const { project, brokerId, brokerName } = job.data;
        const builderSearch = {
            id: project.id,
            builderId: project.builderId,
            builderName: project.builderName,
            projectId: project.id,
            projectName: project.name,
            projectRera: project.rera,
            brokerId: brokerId,
            brokerName: brokerName,
            brokerRera: '',
            _createdDate: new Date().toISOString(),
            _updatedDate: new Date().toISOString(),
        };
        await this.builderSearchModel.create(builderSearch);
    }
};
exports.SearchProcessor = SearchProcessor;
__decorate([
    (0, bull_1.Process)('saveProject'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SearchProcessor.prototype, "handleSaveProject", null);
exports.SearchProcessor = SearchProcessor = __decorate([
    (0, bull_1.Processor)('search-queue'),
    __param(0, (0, mongoose_1.InjectModel)('BuilderSearch')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SearchProcessor);
//# sourceMappingURL=search.processor.js.map