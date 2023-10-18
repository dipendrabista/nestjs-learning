import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";
@Injectable()
export class MessagesService {

    // messagesRepository: MessagesRepository;

    // constructor( messagesRepo: MessagesRepository) {
    //     this.messagesRepository = messagesRepo;
    // }

    // or same as above code
    constructor(public messagesRepository: MessagesRepository) {
    }



    async findOne(id: string) {
        return this.messagesRepository.findOne(id);
    }

    findAll() {
        return this.messagesRepository.findAll();
    }

    create(content: string) {
        return this.messagesRepository.create(content);
    }
}