import { CreateMessageDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    messagesService: MessagesService;
    constructor();
    listMessages(): Promise<any>;
    createMessages(body: CreateMessageDto): Promise<void>;
    getMessage(id: string): Promise<void>;
}
