"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const messages_repository_1 = require("./messages.repository");
class MessagesService {
    constructor() {
        this.messagesRepository = new messages_repository_1.MessagesRepository();
    }
    findOne(id) {
        return this.messagesRepository.findOne(id);
    }
    findAll() {
        return this.messagesRepository.findAll();
    }
    create(content) {
        return this.messagesRepository.create(content);
    }
}
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map