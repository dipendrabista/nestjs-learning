"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesRepository = void 0;
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
class MessagesRepository {
    async findOne(id) {
        const contents = await (0, promises_1.readFile)('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        return messages[id];
    }
    async findAll() {
        const contents = await (0, promises_1.readFile)('messages.json', 'utf-8');
        const messags = JSON.parse(contents);
        return messags;
    }
    async create(content) {
        const contents = await (0, promises_1.readFile)('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };
        await (0, fs_1.writeFile)('messages.json', JSON.stringify(messages), () => {
            console.log('Contents has been successfully written to console');
        });
    }
}
exports.MessagesRepository = MessagesRepository;
//# sourceMappingURL=messages.repository.js.map