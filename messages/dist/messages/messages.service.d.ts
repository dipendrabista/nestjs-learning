import { MessagesRepository } from "./messages.repository";
export declare class MessagesService {
    messagesRepository: MessagesRepository;
    constructor(messagesRepository: MessagesRepository);
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: string): Promise<void>;
}
