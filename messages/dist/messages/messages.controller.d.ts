import { CreateMessageDto } from './dtos/create-messages.dto';
export declare class MessagesController {
    listMessages(): string;
    createMessages(body: CreateMessageDto): CreateMessageDto;
    getMessage(id: string): string;
}
