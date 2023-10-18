"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessegesModule = void 0;
const common_1 = require("@nestjs/common");
const messages_controller_1 = require("./messages/messages.controller");
const messages_repository_1 = require("./messages/messages.repository");
const messages_service_1 = require("./messages/messages.service");
let MessegesModule = class MessegesModule {
};
exports.MessegesModule = MessegesModule;
exports.MessegesModule = MessegesModule = __decorate([
    (0, common_1.Module)({
        controllers: [messages_controller_1.MessagesController],
        providers: [messages_service_1.MessagesService, messages_repository_1.MessagesRepository]
    })
], MessegesModule);
//# sourceMappingURL=messeges.module.js.map