import { MessagesRepository } from "./messages.repository";
export declare class MessagesService {
    messagesRepository: MessagesRepository;
    constructor();
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: string): Promise<void>;
}
