import { writeFile } from "fs";
import { readFile } from "fs/promises";

export class MessagesRepository {

    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        return messages[id];

    }

    async findAll() {
        const contents = await readFile('messages.json', 'utf-8');
        const messags = JSON.parse(contents);
        return messags;

    }

    async create(content: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };
        await writeFile('messages.json', JSON.stringify(messages), () => {
            console.log('Contents has been successfully written to console')
        });

    }
}